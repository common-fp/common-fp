'use client'

import Script from 'next/script'

const ClientScripts = () => {
  return (
    <Script
      src="/bundles/initial-client-scripts.js"
      strategy="beforeInteractive"
    />
  )
}

export default ClientScripts
