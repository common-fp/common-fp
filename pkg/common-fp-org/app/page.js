import SiteHeader from './cmpt/site-header'
import Main from './main'

const metadata = {
  title: 'CFP - Home',
  description: 'The home page introducing Common FP',
}

const Home = () => {
  return (
    <>
      <SiteHeader />
      <Main />
    </>
  )
}

export default Home
export { metadata }
