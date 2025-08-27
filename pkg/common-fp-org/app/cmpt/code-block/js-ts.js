/**
 * It would be nice to simplify this component, however its complexity is mostly
 * a result of my animations and I'm unsure whether that can easily be
 * modularized. So we'll deal with the complexity until its problems show.
 */

import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import cn from 'classnames'
import { useMemoOne } from 'use-memo-one'
import { SiteCtx } from '@/site-context'
import useIsComponentRendered from '@/hooks/use-is-component-rendered'
import hljs from '@/utils/hljs'
import makeToggleLanguage from './make-toggle-language'
import { getTryItUrl, observeWhenComponentIsRendered } from './utils'

const JsTsCodeBlock = ({ className, code, debugId, showTopPanel = true }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isRendered, setIsRendered] = useState(false)

  const elPre = useRef()
  const elCodeJs = useRef()
  const elCodeTs = useRef()
  const elTabJs = useRef()
  const elTabTs = useRef()

  const siteCtx = useContext(SiteCtx)
  const { hydrationAwareLanguage, isClientControlled } = siteCtx
  const [language, setLanguage] = useState(siteCtx.language)

  const highlightedCode = useMemo(
    () => ({
      js: hljs.highlight(code.display.js, { language: 'js' }).value,
      ts: hljs.highlight(code.display.ts, { language: 'ts' }).value,
    }),
    [code]
  )

  useEffect(
    () => observeWhenComponentIsRendered({ elPre, isRendered, setIsRendered }),
    // we only want to run this once - isRendered's initial value is all we
    // care about
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useIsComponentRendered({ debugId, isRendered })

  const isActive = useMemo(
    () => ({
      js: isClientControlled && language === 'js',
      ts: isClientControlled && language === 'ts',
    }),
    [isClientControlled, language]
  )

  const fullCode = code.full
  const tryItUrl = useMemo(
    () => getTryItUrl({ hydrationAwareLanguage, fullCode }),
    [hydrationAwareLanguage, fullCode]
  )

  const toggleLanguage = useMemoOne(
    () =>
      makeToggleLanguage({
        elCodeJs,
        elCodeTs,
        elPre,
        elTabJs,
        elTabTs,
        setLanguage,
        setIsAnimating,
      }),
    []
  )

  useEffect(
    () => toggleLanguage({ language, siteCtxLanguage: siteCtx.language }),
    [language, siteCtx.language, toggleLanguage]
  )

  const show = lang => {
    if (siteCtx.language === lang || isAnimating) return

    siteCtx.setLanguage(lang)
  }

  const onTabJsClicked = () => show('js')
  const onTabTsClicked = () => show('ts')

  return (
    <div
      className={cn('code-block', 'code-block-jsts', className, {
        'client-controlled': siteCtx.isClientControlled,
      })}
    >
      {showTopPanel && (
        <div className="top-panel">
          <div className="tab-list">
            <>
              <button
                ref={elTabJs}
                aria-label="View code in JavaScript"
                className={cn('tab js', { active: isActive.js })}
                onClick={onTabJsClicked}
              >
                .js
              </button>
              <button
                ref={elTabTs}
                aria-label="View code in TypeScript"
                className={cn('tab ts', { active: isActive.ts })}
                onClick={onTabTsClicked}
              >
                .ts
              </button>
            </>
          </div>

          <div className="tab-list actions">
            <a href={tryItUrl} className="tab try-it" target="_blank">
              <span className="text">Try It</span>
            </a>
          </div>
        </div>
      )}
      <pre ref={elPre}>
        {highlightedCode.js && (
          <code
            ref={elCodeJs}
            className={cn('js', { active: isActive.js })}
            dangerouslySetInnerHTML={{ __html: highlightedCode.js }}
          />
        )}
        {highlightedCode.ts && (
          <code
            ref={elCodeTs}
            className={cn('ts', { active: isActive.ts })}
            dangerouslySetInnerHTML={{ __html: highlightedCode.ts }}
          />
        )}
      </pre>
    </div>
  )
}

export default JsTsCodeBlock
