import code from '@/built/code-examples/api/m-fill-range-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to set an array range to a value. Below, we had an issue
      at our soup factory. No salt was added from 3pm to 5. Now we have to throw
      away all that soup! Let's reset the hourly numbers to zero.
      `}
    </p>
    <CodeBlock debugId="m-fill-range-with/cans" jsTs={code.cans} />
  </>
)

export default Why
