import code from '@/built/code-examples/api/strict-equals'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => (
    <>
      <p>Test whether something strictly equals another</p>
      <p>
        In other words, it returns the result of{' '}
        <InlineCode>item1 === item2</InlineCode>
      </p>
    </>
  ),
}

export default what
