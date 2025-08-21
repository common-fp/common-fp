import code from '@/built/code-examples/api/get-size'
import TooltipInfo from '@/cmpt/tooltip-info'
import InlineCode from '@/cmpt/inline-code'

import './what.scss'

const what = {
  example: code.minimal,
  Description: () => {
    const size = (
      <TooltipInfo term="size">
        <dl className="get-size-info">
          <dt>array or string</dt>
          <dd>length</dd>

          <dt>map or set</dt>
          <dd>size</dd>

          <dt>object</dt>
          <dd>
            number of own enumberable string-keyed properties i.e.{' '}
            <InlineCode>Object.keys(obj).length</InlineCode>
          </dd>
        </dl>
      </TooltipInfo>
    )
    return (
      <>
        <p>Return the {size} of the collection</p>
      </>
    )
  },
}

export default what
