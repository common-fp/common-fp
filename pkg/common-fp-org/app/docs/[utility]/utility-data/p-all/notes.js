import code from '@/built/code-examples/api/p-all'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => {
  const asyncEveryLimit = (
    <InlineCode>
      <a
        target="_blank"
        href="https://caolan.github.io/async/v3/docs.html#everyLimit"
      >
        async.everyLimit
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        pAll awaits each item before moving onto the next. See {asyncEveryLimit}{' '}
        if you want to run more than one call at a time.
      </p>
      <CodeBlock debugId="p-all/series" jsTs={code.series} />
    </>
  )
}

export default Notes
