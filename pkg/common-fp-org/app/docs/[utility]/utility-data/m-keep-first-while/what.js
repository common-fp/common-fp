import code from '@/built/code-examples/api/m-keep-first-while'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Keep the first elements of an array that pass a condition</p>
      <MutableNote argName="anArray" utilityName="keepFirstWhile" />
    </>
  ),
}

export default what
