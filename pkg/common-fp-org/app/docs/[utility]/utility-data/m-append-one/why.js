import code from '@/built/code-examples/api/m-append-one'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to mutate an array by pushing a value onto it.  Below,
      our fast food joint has a super kitty promotion where every order gets a
      plushy. Let's add one to each order.
      `}
    </p>
    <CodeBlock debugId="m-append-one/super-kitty" jsTs={code.superKitty} />
  </>
)

export default Why
