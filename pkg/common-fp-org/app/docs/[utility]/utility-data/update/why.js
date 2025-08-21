import code from '@/built/code-examples/api/update'
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
        Sometimes we want to update specific entries via functions.  Below, we
        are coding a gifting feature on our audiobook platform.  Let's test it
        by gifting
        `}
        {CatsCradle} to Luke.
      </p>
      <CodeBlock debugId="update/gift" jsTs={code.gift} />
    </>
  )
}

export default Why
