import code from '@/built/code-examples/api/is-falsey'
import CodeBlock from '@/cmpt/code-block'

const Why = () => {
  const falsey = (
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy"
    >
      falsey
    </a>
  )

  return (
    <>
      <p>
        Sometimes {falsey}
        {`
        values need to be handled.  Below, we have applicants compiled from
        multiple sources.  If a field is falsey, that means the data is missing.
        Let's get the missing fields so we can reach back out to the applicants.
        `}
      </p>
      <CodeBlock debugId="is-falsey/applicants" jsTs={code.applicants} />
    </>
  )
}

export default Why
