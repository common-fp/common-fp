import code from '@/built/code-examples/api/is-before'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we need to compare dates. Below, we have some car rental
      applicants.  Unfortunately, you have to be at least 25 years old to rent
      from our company. Let's only process those born before the cutoff date.
      `}
    </p>
    <CodeBlock debugId="is-before/car-rental" jsTs={code.carRental} />
  </>
)

export default Why
