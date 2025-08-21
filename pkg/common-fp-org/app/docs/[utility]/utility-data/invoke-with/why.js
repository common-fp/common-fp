import code from '@/built/code-examples/api/invoke-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Occasionally we'll encounter a design pattern where a collection of
      functions takes the same arguments. Below, we're developing a screen to be
      shown across the Nebraska Zoo. Each data accessor takes the animal's name
      to get its value. Let's invoke each accessor with the name of the animal
      and get all their data.
      `}
    </p>
    <CodeBlock debugId="invoke-with/animals" jsTs={code.animals} />
  </>
)

export default Why
