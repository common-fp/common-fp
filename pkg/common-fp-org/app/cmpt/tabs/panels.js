import './panels.scss'

const TabPanels = props => {
  const { panels } = props

  return (
    <ol className="tab-panels" role="list">
      {panels}
    </ol>
  )
}

export default TabPanels
