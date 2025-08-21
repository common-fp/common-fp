import code from '@/built/code-examples/api/p-any'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => {
  const asyncSomeLimit = (
    <InlineCode>
      <a
        target="_blank"
        href="https://caolan.github.io/async/v3/docs.html#someLimit"
      >
        async.someLimit
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        pAny awaits each item before moving onto the next. See {asyncSomeLimit}{' '}
        if you want to run more than one call at a time.
      </p>
      <CodeBlock debugId="p-any/series" jsTs={code.series} />
    </>
  )
}

export default Notes
