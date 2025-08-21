import SiteHeader from '@/cmpt/site-header'
import Content from './content'

const metadata = {
  title: 'CFP - Try It',
  description: 'Try Common FP in the browser',
}

const TryIt = () => {
  return (
    <>
      <SiteHeader />
      <Content />
    </>
  )
}

export default TryIt
export { metadata }
