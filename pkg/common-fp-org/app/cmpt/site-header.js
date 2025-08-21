import Link from 'next/link'
import ContentFrame from './content-frame'
import DiscordIcon from './discord-icon'
import GithubIcon from './github-icon'
import Logo from './logo'
import ThemeSelector from './theme-selector'

import './site-header.scss'

const SiteHeader = ({ customDocsLinks }) => (
  <header className="site-header">
    <ContentFrame>
      <nav>
        <Link className="nav-logo" href="/" prefetch={false}>
          <Logo />
        </Link>
        <Link className="tablet-and-larger" href="/" prefetch={false}>
          Home
        </Link>
        {customDocsLinks || (
          <>
            <Link className="desktop" href="/docs" prefetch={false}>
              Documentation
            </Link>
            <Link className="tablet-and-smaller" href="/docs" prefetch={false}>
              Docs
            </Link>
          </>
        )}
        <Link href="/try-it" prefetch={false}>
          Try It
        </Link>
      </nav>
      <Link
        target="_blank"
        href="https://github.com/common-fp/common-fp"
        className="icon-link"
        prefetch={false}
      >
        <GithubIcon />
      </Link>
      <Link
        target="_blank"
        href="https://discord.gg/N8e7mtfwNM"
        className="icon-link mobile-and-larger"
        prefetch={false}
      >
        <DiscordIcon />
      </Link>
      <ThemeSelector />
    </ContentFrame>
  </header>
)

export default SiteHeader
