import code from '@/built/code-examples/api/m-prepend-all'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate an array by prepending values ahead of it.
      Below, Sam is next in line for a roller coaster.  Mike and Luke bought
      fast passes and want to join the line.  Let's move them ahead of Sam.
      `}
    </p>
    <CodeBlock debugId="m-prepend-all/fast-pass" jsTs={code.fastPass} />
  </>
)

export default Why
