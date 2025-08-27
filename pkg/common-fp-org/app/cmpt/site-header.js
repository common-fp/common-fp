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
        <Link className="nav-logo" href="/" aria-label="Home" prefetch={false}>
          <Logo />
        </Link>
        <Link
          className="tablet-and-larger"
          href="/"
          aria-label="Home"
          prefetch={false}
        >
          Home
        </Link>
        {customDocsLinks || (
          <>
            <Link
              className="desktop"
              href="/docs"
              aria-label="Documentation"
              prefetch={false}
            >
              Documentation
            </Link>
            <Link
              className="tablet-and-smaller"
              href="/docs"
              aria-label="Documentation"
              prefetch={false}
            >
              Docs
            </Link>
          </>
        )}
        <Link href="/try-it" aria-label="Try it out" prefetch={false}>
          Try It
        </Link>
      </nav>
      <Link
        target="_blank"
        href="https://github.com/common-fp/common-fp"
        className="icon-link"
        aria-label="View the source on GitHub"
        prefetch={false}
      >
        <GithubIcon />
      </Link>
      <Link
        target="_blank"
        href="https://discord.gg/N8e7mtfwNM"
        className="icon-link mobile-and-larger"
        aria-label="Join our Discord server"
        prefetch={false}
      >
        <DiscordIcon />
      </Link>
      <ThemeSelector />
    </ContentFrame>
  </header>
)

export default SiteHeader
