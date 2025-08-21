import code from '@/built/code-examples/api/replace-first-match'
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
        <p>Replace the first match of a string or regex.</p>
        <InfoNote>
          When passing a regex, make sure the {globalFlag} is <em>not</em> set
          i.e. the regex <InlineCode>/dog/g</InlineCode> will cause an error.
        </InfoNote>
      </>
    )
  },
}

export default what
