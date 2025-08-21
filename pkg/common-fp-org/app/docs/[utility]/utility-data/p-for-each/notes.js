import code from '@/built/code-examples/api/p-for-each'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => {
  const asyncEachOfLimit = (
    <InlineCode>
      <a
        target="_blank"
        href="https://caolan.github.io/async/v3/docs.html#eachOfLimit"
      >
        async.eachOfLimit
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        pForEach calls the function for all entries at once. See{' '}
        {asyncEachOfLimit} if you want to limit the concurrency.
      </p>
      <CodeBlock debugId="p-for-each/concurrent" jsTs={code.concurrent} />
    </>
  )
}

export default Notes
