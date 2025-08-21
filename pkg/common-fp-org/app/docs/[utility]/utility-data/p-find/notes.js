import code from '@/built/code-examples/api/p-find'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Notes = () => {
  const asyncDetectLimit = (
    <InlineCode>
      <a
        target="_blank"
        href="https://caolan.github.io/async/v3/docs.html#detectLimit"
      >
        async.detectLimit
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        pFind awaits each item before moving onto the next. See{' '}
        {asyncDetectLimit} if you want to run more than one call at a time.
      </p>
      <CodeBlock debugId="p-find/series" jsTs={code.series} />
    </>
  )
}

export default Notes
