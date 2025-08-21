import code from '@/built/code-examples/api/split'
import CodeBlock from '@/cmpt/code-block'

const Why = () => {
  const CSV = (
    <a
      target="_blank"
      href="https://en.wikipedia.org/wiki/Comma-separated_values"
    >
      CSV
    </a>
  )

  return (
    <>
      <p>
        Sometimes we can extract data from a string by splitting it. Below, we
        have weather data in a {CSV} file.
        {`
        Let's split each newline to get the rows, then split each comma for
        the columns.
        `}
      </p>
      <CodeBlock debugId="split/csv" jsTs={code.csv} />
    </>
  )
}

export default Why
