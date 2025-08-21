import code from '@/built/code-examples/api/return-first-arg'
import CodeBlock from '@/cmpt/code-block'

const Why = () => {
  return (
    <>
      <p>
        {`
        Developers commonly use this as a default option.  Below, we're coding a
        game where heroes craft various swords. When crafting a sword, let's
        take a function that modifies the default sword attributes. This
        argument will leave them unmodified by default.
        `}
      </p>
      <CodeBlock debugId="return-first-arg/sword" jsTs={code.sword} />
    </>
  )
}

export default Why
