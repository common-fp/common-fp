import code from '@/built/code-examples/api/p-map-values'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => {
  const asyncMapLimit = (
    <InlineCode>
      <a
        target="_blank"
        href="https://caolan.github.io/async/v3/docs.html#mapLimit"
      >
        async.mapLimit
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        pMapValues calls the mapper function for all entries at once. See{' '}
        {asyncMapLimit} if you want to limit the concurrency.
      </p>
      <CodeBlock debugId="p-map-values/concurrent" jsTs={code.concurrent} />
    </>
  )
}

export default Notes
