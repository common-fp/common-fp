import code from '@/built/code-examples/api/swap-first-two-args'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'
import { nbsp2 } from '@/utils'

import './why.scss'

const Why = () => {
  const commonSignature = (
    <InlineCode content="(value, key, collection) => any" />
  )
  const arrayMap = (
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#callbackfn"
    >
      array.map
    </a>
  )
  const mapForEach = (
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach#callbackfn"
    >
      map.forEach
    </a>
  )
  const lodashMapKeys = (
    <a target="_blank" href="https://lodash.com/docs/4.17.15#mapKeys">
      {' '}
      _.mapKeys
    </a>
  )
  return (
    <div className="swap-first-two-args_why">
      <p>
        Most iterating callbacks have the signature {commonSignature}.{nbsp2}{' '}
        For examples, see {arrayMap}, {mapForEach}, {lodashMapKeys} etc. This
        makes sense, as we usually care about the value. Sometimes, however, we
        care more about the key.
      </p>
      <p>
        This is where <InlineCode content="swapFirstTwoArgs" /> is helpful. We
        {`
        can pass a function that expects a key as its first parameter, then
        use it as a callback.  Because this is the primary use case, we can
        assign the alias 'byKey,' as seen below.
        `}
      </p>
      <h3>Onto the example</h3>
      <p>
        {`
        Below, we are writing library software that tracks checked-out books.
        Other systems require lowercase names, so let's map over our keys to be
        compatible.
        `}
      </p>
      <CodeBlock debugId="swap-first-two-args/lower" jsTs={code.lower} />
    </div>
  )
}

export default Why
