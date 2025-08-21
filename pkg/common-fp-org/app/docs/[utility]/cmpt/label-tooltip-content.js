import GlossaryItem from '@/cmpt/glossary-item'
import InlineCode from '@/cmpt/inline-code'

import './label-tooltip-content.scss'

const mdnBaseUrl =
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects'

const hrefPrefixBySource = {
  _: 'https://lodash.com/docs/4.17.15#',
  a: 'https://caolan.github.io/async/v3/docs.html#',
  '[]': `${mdnBaseUrl}/Array/`,
  '{}': `${mdnBaseUrl}/Object/`,
  "''": `${mdnBaseUrl}/String/`,
  p: `${mdnBaseUrl}/Promise/`,
  r: 'https://ramdajs.com/docs/#',
}

const AliasLink = ({ alias, method, source }) => {
  const hrefPrefix = hrefPrefixBySource[source]
  return (
    <a target="_blank" href={`${hrefPrefix}${method}`}>
      <InlineCode>{alias}</InlineCode>
    </a>
  )
}

const AliasContent = ({ tooltip }) => (
  <>
    Similar to
    <span className="one-alias">
      {' '}
      <AliasLink {...tooltip} />
    </span>
  </>
)

const DataContent = ({ tooltip }) => {
  const { ie, type } = tooltip

  return (
    <div className="data-content">
      <div className="type">
        <GlossaryItem id="data-type" text="Data type" />
        {': '}
        {type}
      </div>
      {ie && <div className="ie">i.e. {ie}</div>}
    </div>
  )
}

const MutableContent = () => (
  <GlossaryItem id="mutating-data" text="This utility mutates its data" />
)

const AsyncContent = () => (
  <GlossaryItem id="async-utilities" text="This utility is asynchronous" />
)

const ContentCmptByType = {
  aka: AliasContent,
  async: AsyncContent,
  data: DataContent,
  mutable: MutableContent,
}

const LabelTooltipContent = ({ info }) => {
  const ContentCmpt = ContentCmptByType[info.type]
  return <ContentCmpt tooltip={info.tooltip} />
}

export default LabelTooltipContent
export { hrefPrefixBySource }
