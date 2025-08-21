import code from '@/built/code-examples/api/p-discard-when'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => {
  const asyncFilterLimit = (
    <InlineCode>
      <a
        target="_blank"
        href="https://caolan.github.io/async/v3/docs.html#filterLimit"
      >
        async.filterLimit
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        pDiscardWhen calls the predicate for all entries at once. See{' '}
        {asyncFilterLimit} if you want to limit the concurrency.
      </p>
      <CodeBlock debugId="p-discard-when/concurrent" jsTs={code.concurrent} />
    </>
  )
}

export default Notes
