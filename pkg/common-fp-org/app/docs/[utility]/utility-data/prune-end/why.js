import code from '@/built/code-examples/api/prune-end'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to remove characters from the end of strings. Below, we
      are coding print software for PDFs.  We've parsed the external links, but
      the arrows remain.  Let's clean them up for printing.
      `}
    </p>
    <CodeBlock debugId="prune-end/links" jsTs={code.links} />
  </>
)

export default Why
