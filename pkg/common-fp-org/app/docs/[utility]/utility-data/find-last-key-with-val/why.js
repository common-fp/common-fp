import code from '@/built/code-examples/api/find-last-key-with-val'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to find the last index to a value. Below, Chris starts a
      weightlifting program by seeing how many reps he can lift per level. Let's
      find the highest level where he can only lift one rep.
      `}
    </p>
    <CodeBlock debugId="find-last-key-with-val/weight" jsTs={code.weight} />
  </>
)

export default Why
