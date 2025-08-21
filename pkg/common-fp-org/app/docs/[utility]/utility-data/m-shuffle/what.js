import code from '@/built/code-examples/api/m-shuffle'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Randomly order an array</p>
      <MutableNote argName="anArray" utilityName="shuffle" />
    </>
  ),
}

export default what
