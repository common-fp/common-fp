import code from '@/built/code-examples/api/is-truthy'

const what = {
  example: code.minimal,
  Description: () => {
    const truthy = (
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Glossary/Truthy"
      >
        truthy
      </a>
    )
    return <p>Test whether a value is {truthy}</p>
  },
}

export default what
