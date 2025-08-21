import AnchoredHeading from '@/cmpt/anchored-heading'
import InlineCode from '@/cmpt/inline-code'
import ScrollToLink from '@/cmpt/scroll-to-link'
import { anchor } from '../utils'

const SideEffectsSection = () => {
  const sort = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
      >
        sort
      </a>
    </InlineCode>
  )
  const reverse = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
      >
        reverse
      </a>
    </InlineCode>
  )
  const toSorted = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted"
      >
        toSorted
      </a>
    </InlineCode>
  )
  const toReversed = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed"
      >
        toReversed
      </a>
    </InlineCode>
  )
  const mutate = <ScrollToLink scrollToId="mutating-data">mutate</ScrollToLink>

  return (
    <section>
      <AnchoredHeading level={2} id={anchor.sideEffects} text="Side Effects" />
      <h4>What is a side effect?</h4>
      <p>
        A side effect is code that modifies state outside the current function.
        For example, {sort} and {reverse} cause side effects since they {mutate}{' '}
        their array. This is different from {toSorted} and {toReversed}, which
        return new arrays and are thus free from side effects.
      </p>

      <h4>Why are they important?</h4>
      <p>
        {`
        From a functional programming (FP) perspective, side effects complicate
        code.  For example, we must take care when calling
        `}
        {sort} since the array may be referenced elsewhere. This care is not
        necessary for {toSorted} since the original array stays intact.
      </p>
      <p>
        FP utilities are free from side effects by default, with the goal of
        simplifying code.
      </p>

      <h4>When are side effects fine?</h4>
      <p>
        {`
        I don't mean to portray side effects as bad.  Often they're necessary.
        For example, we cause a side effect any time we update data in storage,
        such as a user preference.
        `}
      </p>
      <p>
        {`
        They can also be the better solution.  For instance, we wouldn't call
        `}
        {toReversed} over an enormous array since the copy may bloat memory
        usage.
      </p>
      <p>
        {`
        Other times we don't have a choice since a library requires it.  One
        common example is the node library
        `}
        <a target="_blank" href="https://expressjs.com/">
          Express
        </a>
        ,
        {`
        where side effects are how you interact with it.
        `}
      </p>
      <p>
        {`
        There are plenty more, but I'll leave it at that.
        `}
      </p>
    </section>
  )
}

export default SideEffectsSection
