import code from '@/built/code-examples/api/is-falsey'

const what = {
  example: code.minimal,
  Description: () => {
    const falsey = (
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy"
      >
        falsey
      </a>
    )
    return <p>Test whether a value is {falsey}</p>
  },
}

export default what
