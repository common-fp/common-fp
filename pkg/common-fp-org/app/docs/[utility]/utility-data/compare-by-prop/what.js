import code from '@/built/code-examples/api/compare-by-prop'

const what = {
  example: code.minimal,
  Description: () => {
    const toSortedLink = (
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted"
      >
        toSorted
      </a>
    )

    return (
      <>
        <p>
          Create a function comparing properties intended for built-in methods
          such as {toSortedLink}.
        </p>
        <p>Below, we sort an array of people by name.</p>
      </>
    )
  },
}

export default what
