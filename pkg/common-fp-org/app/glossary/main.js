'use client'

import SubNav from '@/cmpt/sub-nav'
import Content from './content'
import useScrollToOnInit from '@/hooks/use-scroll-to-on-init'

import './main.scss'

const anchors = [
  { id: 'data-type', text: 'Data Type' },
  { id: 'side-effects', text: 'Side Effects' },
  { id: 'mutating-data', text: 'Mutating Data' },
  { id: 'async-utilities', text: 'Async Utilities' },
]

const Main = () => {
  useScrollToOnInit({ willHaveChildren: true })

  return (
    <main className="glossary content-frame">
      <SubNav className="tablet-and-larger" anchors={anchors} />
      <Content />
    </main>
  )
}

export default Main
