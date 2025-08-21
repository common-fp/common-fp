import code from '@/built/code-examples/api/prepend-all'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to prepend an array.  Below, we have some songs queued
      up.  They're good songs, but we're jonesing to hear "Superstition" and
      "Once in a Lifetime," so let's prepend those.
      `}
    </p>
    <CodeBlock debugId="prepend-all/music" jsTs={code.music} />
  </>
)

export default Why
