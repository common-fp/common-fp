import code from '@/built/code-examples/api/truncate-to-n-lines'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => {
    const lf = <InlineCode content="\n" />
    const crlf = <InlineCode content="\r\n" />

    return (
      <>
        <p>
          Truncate a string to <InlineCode content="n" /> lines,
          {`
            appending an ellipses if more lines exist.
          `}
        </p>
        <p>
          Note: both {lf} and {crlf} are supported
        </p>
      </>
    )
  },
}

export default what
