import code from '@/built/code-examples/api/m-assign-overrides'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to assign required properties over a collection.  Below,
      we have an outfit for our game character Jenkins.  To join the pirate
      guild, we have to wear their pirate hat and eye patch.  Let's join'em.
      `}
    </p>
    <CodeBlock
      debugId="m-assign-overrides/pirate-guild"
      jsTs={code.pirateGuild}
    />
  </>
)

export default Why
