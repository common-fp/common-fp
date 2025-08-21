import code from '@/built/code-examples/api/replace-all-matches'
import InfoNote from '@/docs/[utility]/cmpt/info-note'
import InlineCode from '@/cmpt/inline-code'

const what = {
  example: code.minimal,
  Description: () => {
    const globalFlag = (
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp#g_global"
      >
        global flag
      </a>
    )
    return (
      <>
        <p>Replace all matches of a string or regex.</p>
        <InfoNote>
          When passing a regex, the {globalFlag} is required e.g.{' '}
          <InlineCode>/dog/g</InlineCode>
        </InfoNote>
      </>
    )
  },
}

export default what
