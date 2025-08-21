import MainWrapper from './main-wrapper'
import utilityNames from '@/built/utility-names'

const Docs = async ({ params }) => (
  <>
    <MainWrapper utilityName={(await params).utility} />
  </>
)

export const generateStaticParams = () => {
  return utilityNames.map(utility => ({ utility }))
}

export const generateMetadata = async ({ params }) => {
  const { utility } = await params
  return {
    title: `CFP - Docs - ${utility}`,
    description: `Documentation for ${utility}`,
  }
}

// return 404 when a utility that doesn't exist is requested.
// By default nextjs attempts to dynamically render it
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false

// export const dynamic = 'error'

export default Docs
// export { dynamicParams, generateMetadata, generateStaticParams }
