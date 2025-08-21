import { useContext, useMemo } from 'react'
import { capitalCase } from 'change-case'
import What from './what'
import { PageCtx } from '../../page-context'

const optionalTabNames = ['More', 'Notes']

const useTabList = () => {
  const { utility } = useContext(PageCtx)

  return useMemo(() => {
    if (!utility) return []

    const { Why } = utility

    const requiredTabs = [
      {
        button: { text: 'What' },
        panel: { content: <What /> },
      },
      {
        button: { text: 'Why' },
        panel: { content: <Why /> },
      },
    ]
    const optionalTabs = optionalTabNames
      .filter(tabName => utility[tabName])
      .map(tabName => {
        const Content = utility[tabName]
        return {
          button: { text: capitalCase(tabName) },
          panel: { content: <Content /> },
        }
      })

    return requiredTabs.concat(optionalTabs)
  }, [utility])
}

export default useTabList
