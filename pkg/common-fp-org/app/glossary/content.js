import { Asynchronous, DataType, MutatingData, SideEffects } from './sections'
import { anchor } from './utils'
import useTrackAnchorsOnScroll from '@/hooks/use-track-anchors-on-scroll'

import './content.scss'

const Content = () => {
  useTrackAnchorsOnScroll(anchor)

  return (
    <div className="page-content glossary">
      <h1>Glossary</h1>
      <p className="tagline">Terms and concepts explained</p>

      <DataType />
      <SideEffects />
      <MutatingData />
      <Asynchronous />
    </div>
  )
}

export default Content
