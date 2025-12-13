import { ThemeProvider } from 'next-themes'
import ClientScripts from './client-scripts'
import PreloadResources from './preload-resources'
import SiteContext from './site-context'

import './styles/site.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientScripts />
        <PreloadResources />
        <ThemeProvider disableTransitionOnChange={true}>
          <SiteContext>{children}</SiteContext>
        </ThemeProvider>
      </body>
    </html>
  )
}
