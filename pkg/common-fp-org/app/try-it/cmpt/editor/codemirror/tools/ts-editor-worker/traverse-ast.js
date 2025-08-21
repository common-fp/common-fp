import { getTsEnvironment } from './utils'

const traverseAst = async onNodeEntered => {
  const tsEnvironment = await getTsEnvironment()
  const program = tsEnvironment.languageService.getProgram()
  const sourceFile = program.getSourceFile('example.ts')
  recursivelyTraverseAst({ node: sourceFile, onNodeEntered })
}

function recursivelyTraverseAst({ node, onNodeEntered }) {
  if (!onNodeEntered(node)) return false

  for (const child of node.getChildren()) {
    if (!recursivelyTraverseAst({ node: child, onNodeEntered })) return false
  }

  return true
}

export default traverseAst
