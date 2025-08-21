import { useContext } from 'react'
import CodeBlock from '@/cmpt/code-block'
import { PageCtx } from '../../page-context'

import './what.scss'

const What = () => {
  const { utility } = useContext(PageCtx)
  const { Description, example, name } = utility.what

  return (
    <>
      <Description />
      <CodeBlock debugId={`${name}/minimal`} jsTs={example} />
    </>
  )
}

export default What
