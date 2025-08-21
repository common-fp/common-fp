import code from '@/built/code-examples/api/prune'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to remove characters from the ends of strings.  Below,
      we run a radio station and get ad scripts from our partner.  Unfortunately
      they are poorly formatted, so let's clean up what we can.
      `}
    </p>
    <CodeBlock debugId="prune/promo" jsTs={code.promo} />
  </>
)

export default Why
