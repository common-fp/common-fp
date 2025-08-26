const Notes = () => {
  const reduce = (
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
    >
      reduce
    </a>
  )
  return (
    <>
      <p>
        This utility is similar to {reduce},
        {`
        a function I find difficult to explain.  The primary issue is its usage
        not matching its etymology nor our intuition of what reduce means.  I
        believe 'alter' is much more fitting.  Another issue is how the function
        can be used more broadly than others.  For instance, you could filter or
        map over an array using reduce, while the opposite is not true.  Because
        it's so broad, we can't give a focused explanation for its purpose.
        It'd be like explaining when to use a for loop.
        `}
      </p>
      <p>
        {`
        With that out of the way, reduce is still a helpful tool.  This is why
        I'm including alter in Common FP.
        `}
      </p>
    </>
  )
}

export default Notes
