'use client'

import { useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import cn from 'classnames'
import Moon from './moon'
import Sun from './sun'
import Appear from './appear'
import useOnClickOutside from '@/hooks/use-on-click-outside'

import './theme-selector.scss'

const ThemeSelector = props => {
  const { className: classNameProp, ...restProps } = props
  const { setTheme, theme } = useTheme()

  const [showMenu, setShowMenu] = useState(false)

  const click = () => setShowMenu(!showMenu)
  const setThemeAndHideMenu = theme => {
    setTheme(theme)
    setShowMenu(false)
  }
  const selectDark = () => setThemeAndHideMenu('dark')
  const selectLight = () => setThemeAndHideMenu('light')
  const selectSystem = () => setThemeAndHideMenu('system')
  const ref = useRef()
  useOnClickOutside(ref, () => setShowMenu(false))
  const isLight = theme === 'light'
  const isDark = theme === 'dark'
  const isSystem = !isLight && !isDark

  return (
    <div className={cn('cfp-theme-selector', classNameProp)} {...restProps}>
      <button onClick={click}>
        <Moon className="theme-icon theme-dark" />
        <Sun className="theme-icon theme-light" />
      </button>
      <Appear from="left" when={showMenu} className="menu" ref={ref}>
        <button className={cn({ active: isDark })} onClick={selectDark}>
          Dark
        </button>
        <button className={cn({ active: isLight })} onClick={selectLight}>
          Light
        </button>
        <button className={cn({ active: isSystem })} onClick={selectSystem}>
          System
        </button>
      </Appear>
    </div>
  )
}

export default ThemeSelector
