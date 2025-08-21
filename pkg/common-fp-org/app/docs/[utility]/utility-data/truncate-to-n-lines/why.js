import code from '@/built/code-examples/api/truncate-to-n-lines'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to limit the number of lines while indicating there's
      more.  Below, we notice our car API is logging unnecessarily long stack
      traces.  Let's truncate them to 5 lines.
      `}
    </p>
    <CodeBlock debugId="truncate-to-n-lines/trim" jsTs={code.trim} />
  </>
)

export default Why
