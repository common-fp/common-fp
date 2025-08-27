import { useContext, useEffect, useState, useRef } from 'react'
import { useMemoOne } from 'use-memo-one'
import RadioSlider from '@/cmpt/radio-slider'
import LoadingIcon from '@/cmpt/loading-icon'
import { SiteCtx } from '@/site-context'
import { EditorCtx } from '../context'
import { switchLanguage } from '../codemirror/tools'

import './language.scss'

const Language = () => {
  const { isClientControlled, language, setLanguage } = useContext(SiteCtx)
  const editorCtx = useContext(EditorCtx)
  const [isSwitchingLanguage, setIsSwitchingLanguage] = useState(false)
  const prevLanguage = useRef(language)

  const langOpts = useMemoOne(() => {
    const lang = isClientControlled ? language : 'js'
    return [
      {
        id: 'js',
        label: '.js',
        checked: lang === 'js',
        ariaLabel: 'View code in JavaScript',
      },
      {
        id: 'ts',
        label: '.ts',
        checked: lang === 'ts',
        ariaLabel: 'View code in TypeScript',
      },
    ]
  }, [language, isClientControlled])

  useEffect(() => {
    if (prevLanguage.current === language) return

    switchLanguageWrapper()

    async function switchLanguageWrapper() {
      setIsSwitchingLanguage(true)
      prevLanguage.current = language
      await switchLanguage(language, {
        compartments: editorCtx.compartments,
        view: editorCtx.view,
      })
      setIsSwitchingLanguage(false)
    }
  }, [language, editorCtx.compartments, editorCtx.view])

  const languageProps = {
    label: 'Language',
    name: 'language',
    onChange: setLanguage,
    options: langOpts,
  }

  return (
    <div className="option-language">
      <RadioSlider {...languageProps} />
      <LoadingIcon active={isSwitchingLanguage} />
    </div>
  )
}

export default Language
