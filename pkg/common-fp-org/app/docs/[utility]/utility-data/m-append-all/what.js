import code from '@/built/code-examples/api/m-append-all'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Push the contents of one array onto another</p>
      <MutableNote argName="base" utilityName="appendAll" />
    </>
  ),
}

export default what
