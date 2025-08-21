import code from '@/built/code-examples/api/for-each'
import CodeBlock from '@/cmpt/code-block'
import TooltipInfo from '@/cmpt/tooltip-info'

const Why = () => {
  const database = (
    <TooltipInfo
      term="database"
      content="The database is an object for example's sake"
    />
  )

  return (
    <>
      <p>
        {`
        Sometimes we need to call a function for each item in a collection. Below,
        we are running a social media site. We track when people appear in search
        results to monitor trends. Let's update our
        `}
        {database} with two recent searches.
      </p>
      <CodeBlock debugId="for-each/analytics" jsTs={code.analytics} />
    </>
  )
}

export default Why
