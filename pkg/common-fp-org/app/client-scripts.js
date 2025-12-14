'use client'

import Script from 'next/script'
import bundleFpaths from '@/built/bundle-fpaths.json'

const ClientScripts = () => {
  return (
    <Script
      src={bundleFpaths.initialClientScripts}
      strategy="beforeInteractive"
    />
  )
}

export default ClientScripts
