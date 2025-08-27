import code from '@/built/code-examples/api/peek'
import CodeBlock from '@/cmpt/code-block'
import InlineUtility from '@/cmpt/inline-utility'
import InfoNote from '@/docs/[utility]/cmpt/info-note'

const Why = () => {
  const compose = <InlineUtility name="compose" />
  const passThrough = <InlineUtility name="passThrough" />
  const getMaxValue = <InlineUtility name="getMaxValue" />
  const sumValues = <InlineUtility name="sumValues" />

  return (
    <>
      <p>
        {`
        Peek's primary purpose is to help us debug chains of functions.  So if
        you don't use
        `}
        {compose} or {passThrough},
        {`
        then you probably don't need peek.
        `}
      </p>
      <p>
        {`
        Peek let's us inspect a value in the chain. In the function you give
        peek, you can set a debugger breakpoint, log the value, or do anything
        else you find helpful.
        `}
      </p>
      <h3>Onto the example</h3>
      <p>
        Below, we composed a function to calculate the bill.
        {`
          Looks like there's a bug!  Let's peek at the intermediate values to
          see what's going on.
        `}
      </p>
      <InfoNote>
        {`
          Whoever wrote this code got the max cost instead of summing them.
          Let's replace
        `}
        {getMaxValue} with {sumValues} to fix the bug.
      </InfoNote>
      <CodeBlock debugId="transpose/debug" jsTs={code.debug} />
    </>
  )
}

export default Why
