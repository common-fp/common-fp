import code from '@/built/code-examples/api/is-truthy'
import CodeBlock from '@/cmpt/code-block'

const Why = () => {
  const truthy = (
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy"
    >
      truthy
    </a>
  )

  return (
    <>
      <p>
        Sometimes we need to handle {truthy}
        {`
        values. Below, we have applicants compiled from multiple sources.  If a
        field is truthy, that means the data was compiled successfully.  Let's
        clean our data by only keeping the truthy fields.
        `}
      </p>
      <CodeBlock debugId="is-truthy/applicants" jsTs={code.applicants} />
    </>
  )
}

export default Why
