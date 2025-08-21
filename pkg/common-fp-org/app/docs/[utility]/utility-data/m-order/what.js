import code from '@/built/code-examples/api/m-order'
import MutableNote from '@/docs/[utility]/cmpt/mutable-note'
import CompareFunction from '@/docs/[utility]/cmpt/compare-function'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Order an array using a <CompareFunction />{' '}
      </p>
      <MutableNote argName="anArray" utilityName="order" />
    </>
  ),
}

export default what
