import code from '@/built/code-examples/api/m-update'
import CodeBlock from '@/cmpt/code-block'

const Why = () => {
  const CatsCradle = (
    <a target="_blank" href="https://en.wikipedia.org/wiki/Cat%27s_Cradle">
      {`Cat's Cradle`}
    </a>
  )

  return (
    <>
      <p>
        {`
        Sometimes we want to mutate entries by updating their values.  Below, we
        are coding a gifting feature on our audiobook platform.  Let's test it
        by gifting
        `}
        {CatsCradle} to Luke.
      </p>
      <CodeBlock debugId="m-update/gift" jsTs={code.gift} />
    </>
  )
}

export default Why
