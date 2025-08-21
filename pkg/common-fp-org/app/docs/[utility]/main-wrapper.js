'use client'

import Main from './main'
import PageContext from './page-context'

import './main.scss'

const MainWrapper = ({ utilityName }) => {
  return (
    <PageContext utilityName={utilityName}>
      <Main />
    </PageContext>
  )
}

export default MainWrapper
