'use client'

import SubNav from '@/cmpt/sub-nav'
import Content from './content'
import useScrollToOnInit from '@/hooks/use-scroll-to-on-init'

import './main.scss'

const anchors = [
  { id: 'what-is-it', text: 'What Is It?' },
  { id: 'get-started', text: 'Get Started' },
  { id: 'why-build-it', text: 'Why Build It?' },
  { id: 'who-is-this-for', text: 'Who Is This For?' },
  { id: 'who-isnt-this-for', text: "Who Isn't This For?" },
]

const Main = () => {
  useScrollToOnInit({ willHaveChildren: true })

  return (
    <main className="home content-frame">
      <SubNav className="tablet-and-larger" anchors={anchors} />
      <Content />
    </main>
  )
}

export default Main
