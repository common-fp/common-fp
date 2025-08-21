import code from '@/built/code-examples/api/transpose'

const what = {
  example: code.minimal,
  Description: () => {
    const wikipedia = (
      <a target="_blank" href="https://en.wikipedia.org/wiki/Transpose">
        wikipedia
      </a>
    )

    return (
      <>
        <p>Return arrays grouped by the sub-array indices.</p>
        <p>Or as {wikipedia} states: it switches the row and column indices.</p>
        <p className="note">
          {`
            If this is confusing, please look at the examples.  Sometimes it's
            easier to to show than tell.
          `}
        </p>
      </>
    )
  },
}

export default what
