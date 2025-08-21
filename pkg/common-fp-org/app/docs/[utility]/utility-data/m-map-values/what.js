import code from '@/built/code-examples/api/m-map-values'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Change each value of a collection</p>
      <MutableNote argName="collection" utilityName="mapValues" />
    </>
  ),
}

export default what
