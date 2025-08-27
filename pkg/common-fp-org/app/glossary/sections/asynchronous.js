import AnchoredHeading from '@/cmpt/anchored-heading'
import InlineUtility from '@/cmpt/inline-utility'
import { anchor } from '../utils'

const AsynchronousSection = () => {
  const caolansAsync = (
    <a target="_blank" href="https://caolan.github.io/async/v3/docs.html">
      {`Caolan's async`}
    </a>
  )

  return (
    <section>
      <AnchoredHeading level={2} id={anchor.async} text="Async Utilities" />
      <p className="note">{`All async utilities are prefixed "p" as in "promise".`}</p>

      <h3>What is an async utility?</h3>
      <p>
        {`
        It's a utility that takes an async function.  For example,
        `}
        <InlineUtility name="pAny" />
        {`
        takes an async predicate to determine if any entry passes a condition.
        This allows us to do things like call an API for each item in a
        shopping cart.
        `}
      </p>

      <h3>{`Why aren't concurrency limits supported?`}</h3>
      <p>
        {`
        I want to keep Common FP simple, and variable concurrency complicates
        the code.  Devs can always depend on
        `}
        {caolansAsync},
        {`
        which should support most cases.  Just be aware it generally returns
        arrays rather than the collection type passed in.
        `}
      </p>
      <p>
        {`
        We can revisit support if there's enough demand.
        `}
      </p>
    </section>
  )
}

export default AsynchronousSection
