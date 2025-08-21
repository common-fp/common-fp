import code from '@/built/code-examples/api/replace-first-match'
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
        Sometimes we want to replace the first match in text. Below, we are
        processing weather data from a {CSV} file.
        {`
        Our boss wants us to show the low and high columns with a symbol '<-->'
        to convey a range.  Since low and high are the initial columns, let's
        replace the first comma with that symbol.
        `}
      </p>
      <CodeBlock debugId="replace-first-match/data" jsTs={code.data} />
    </>
  )
}

export default Why
