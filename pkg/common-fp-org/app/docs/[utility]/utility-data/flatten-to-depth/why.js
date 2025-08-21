import code from '@/built/code-examples/api/flatten-to-depth'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we have nested arrays and only want to flatten to a specific
      depth. Below, Grace's corporation voted to give out bonuses due to their
      success. Only the highest-ranking employees deserve them, so let's find
      our top three tiers from our corporate tree.
      `}
    </p>
    <CodeBlock debugId="flatten-to-depth/bonus" jsTs={code.bonus} />
  </>
)

export default Why
