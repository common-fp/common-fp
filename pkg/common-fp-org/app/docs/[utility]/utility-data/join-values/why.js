import code from '@/built/code-examples/api/join-values'
import CodeBlock from '@/cmpt/code-block'
import InlineCode from '@/cmpt/inline-code'

const Why = () => {
  const join = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
      >
        join
      </a>
    </InlineCode>
  )

  return (
    <>
      <p>
        This is a generic version of {join}.
        {`
          We can use it to join strings of any collection.  Below, Sam has a
          group chat going with Jen and Mike.  Let's join their names to have an
          identifier for Sam's group chat selection.
        `}
      </p>
      <CodeBlock debugId="join-values/chat" jsTs={code.chat} />
    </>
  )
}

export default Why
