import code from '@/built/code-examples/api/fill-range-with'
import CodeBlock from '@/cmpt/code-block'

const Why = () => (
  <>
    <p>
      {`
      Sometimes we want to set an array range to a value.  Below, we have Kim's
      appointment schedule for this week.  Unfortunately an emergency came up,
      and she'll have to close her business down through Wednesday.  Let's
      update her schedule.
      `}
    </p>
    <CodeBlock debugId="fill-range-with/schedule" jsTs={code.schedule} />
  </>
)

export default Why
