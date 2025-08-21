import code from '@/built/code-examples/api/map-keys'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Change each key of a collection</p>
      <p>
        {`
        Below we have some accounts keyed by id.  Let's instead key them
        by email
        `}
      </p>
    </>
  ),
}

export default what
