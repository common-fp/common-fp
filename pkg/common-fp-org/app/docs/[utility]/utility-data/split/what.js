import code from '@/built/code-examples/api/split'

const what = {
  example: code.minimal,
  Description: () => {
    const Split = (
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
      >
        Split
      </a>
    )
    return <p>{Split} a string into an array</p>
  },
}

export default what
