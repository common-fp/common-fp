import code from '@/built/code-examples/api/prune-start'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to remove characters from the start of strings. Below,
      we have a price-searching tool that unfortunately gives us raw strings.
      Let's prune the known characters and turn the prices into numbers. Then we
      can get the best price.
      `}
    </p>
    <CodeBlock debugId="prune-start/prices" jsTs={code.prices} />
  </>
)

export default Why
