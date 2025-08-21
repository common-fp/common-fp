import code from '@/built/code-examples/api/p-compose'
import ComposeNote from '@/docs/[utility]/cmpt/compose-note'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>
        Compose an async function which passes the arguments through an array of
        async functions
      </p>
      <ComposeNote />
    </>
  ),
}

export default what
