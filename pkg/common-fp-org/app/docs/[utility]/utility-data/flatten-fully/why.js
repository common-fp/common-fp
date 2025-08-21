import code from '@/built/code-examples/api/flatten-fully'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have nested arrays and want them in a flat list. Below, we
      want to list all the files in our project directory. Let's flatten it.
      `}
    </p>
    <CodeBlock debugId="flatten-fully/files" jsTs={code.files} />
  </>
)

export default Why
