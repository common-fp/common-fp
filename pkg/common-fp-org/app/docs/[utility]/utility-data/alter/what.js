import code from '@/built/code-examples/api/alter'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Alter a collection into something else</p>
      <p>
        {`
        Below, we have a table of goals and assists for a soccer game.  Tables
        aren't very developer-friendly, so let's alter it to an object.
        `}
      </p>
    </>
  ),
}

export default what
