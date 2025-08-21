import code from '@/built/code-examples/api/m-reverse'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Reverse an array</p>
      <MutableNote argName="anArray" utilityName="reverse" />
    </>
  ),
}

export default what
