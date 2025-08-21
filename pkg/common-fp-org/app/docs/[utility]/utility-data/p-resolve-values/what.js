import code from '@/built/code-examples/api/p-resolve-values'

const what = {
  example: code.minimal,
  Description: () => {
    const promiseAll = (
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
      >
        Promise.all
      </a>
    )
    return (
      <>
        <p>Resolve the values of a collection.</p>
        <p>This is basically a generic {promiseAll}</p>
      </>
    )
  },
}

export default what
