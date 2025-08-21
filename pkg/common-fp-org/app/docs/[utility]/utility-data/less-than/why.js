import code from '@/built/code-examples/api/less-than'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to test for thresholds. Below, we run a scooter company.
      Users rate the scooters after use, allowing us to inspect those that don't
      operate smoothly. Let's get the scooters that are rated less than 4 stars.
      `}
    </p>
    <CodeBlock debugId="less-than/scooters" jsTs={code.scooters} />
  </>
)

export default Why
