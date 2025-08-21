/**
 * This function takes the editor code and:
 *
 * 1. Hoists the optional import to the top
 * 2. Wraps the rest of the content in `const run = async () => {...}`
 * 3. Appends `export { run }`
 *
 * I do this for two reasons
 *
 * 1. To run the user code after running some setup code
 * 2. To enable rollup to bundle everything into a single eval'able script while
 *    maintaining sourcemaps
 *
 * There may be a better approach but I'm just trying to move forward here :)
 */

import MagicString from 'magic-string'
import Traverser from '@/deps/traverser.mjs'
import c from '@/constants'

const wrapExample = (editorCode, espree) => {
  const ms = new MagicString(editorCode)
  const ast = espree.parse(editorCode, {
    loc: true,
    ecmaVersion: c.editor.ecmaVersion,
    sourceType: c.editor.sourceType,
  })
  let importRange
  const nodeEntered = node => {
    ms.addSourcemapLocation(node.start)
    ms.addSourcemapLocation(node.end)
    if (node.type === 'ImportDeclaration') {
      importRange = [node.start, node.end]
    }
  }
  Traverser.traverse(ast, { enter: nodeEntered })

  const runFn = '\n\nconst run = async () => {'
  if (importRange) {
    if (importRange[0] !== 0) {
      ms.move(...importRange, 0)
    }
    const importRangeLen = importRange[1] - importRange[0]
    ms.appendRight(importRangeLen, runFn)
  } else {
    ms.prepend(runFn)
  }

  ms.append('\n}\n\nexport { run }\n')

  const sourcemap = ms.generateMap({
    file: 'wrapped-example.mjs',
    source: 'example.mjs',
    includeContent: true,
    hires: false,
  })

  const wrappedCode =
    ms.toString() + '//# sourceMappingURL=' + sourcemap.toUrl()

  return {
    sourcemap,
    wrappedCode,
  }
}

export default wrapExample
