import AnchoredHeading from '@/cmpt/anchored-heading'
import InlineCode from '@/cmpt/inline-code'
import InlineUtility from '@/cmpt/inline-utility'
import ScrollToLink from '@/cmpt/scroll-to-link'
import { anchor } from '../utils'

const MutatingDataSection = () => {
  const push = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"
      >
        push
      </a>
    </InlineCode>
  )
  const assign = (
    <InlineCode>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
      >
        assign
      </a>
    </InlineCode>
  )
  const primitives = (
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive"
    >
      primitives
    </a>
  )

  return (
    <section>
      <AnchoredHeading
        level={2}
        id={anchor.mutatingData}
        text="Mutating Data"
      />
      <p className="note">{`All utilities that mutate data are prefixed "m".`}</p>

      <h3>What does mutate mean?</h3>
      <p>
        {`It just means change. For instance, we can mutate an array using `}
        {push} or an object using {assign}.
      </p>
      <p className="note">
        {`
        Sorry if this term feels foreign.  I'd use a more familiar word, but
        this concept is important.
        `}
      </p>

      <h3>What is data?</h3>
      <p>
        In Common FP, <em>data</em> refers to the last argument a utility takes.
        For example, with <InlineUtility name="mAppendAll" />,{` it's `}
        <InlineCode>base</InlineCode>
      </p>

      <h3>Can everything be mutated?</h3>
      <p>
        {`No, in JavaScript we can't mutate `}
        {primitives}, e.g., strings and numbers.
      </p>

      <h3>Why is mutating important?</h3>
      <p>
        {`
        In functional programming, we avoid mutating since it's a
        `}
        <ScrollToLink scrollToId="side-effects">side effect</ScrollToLink>. See
        that section for why we avoid side effects.
      </p>
      <p>
        By default, Common FP returns shallow copies of its data rather than
        mutating it, with the goal of simplifying code.
      </p>

      <h3>Then why add utilities that mutate data?</h3>
      <p>
        {`
        Sometimes we don't have a choice.  Libraries may require us to mutate
        properties, or performance concerns may prevent us from making shallow
        copies.
        `}
        There are many use cases for mutating data, and Common FP helps you do
        so in a functional way.
      </p>
    </section>
  )
}

export default MutatingDataSection
