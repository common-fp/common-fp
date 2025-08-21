import { useContext, useEffect, useRef } from 'react'
import { animate } from 'motion'
import { useMemoOne } from 'use-memo-one'
import cn from 'classnames'
import { transitionDurSeconds } from '@/utils/style-variables'
import { SiteCtx } from '@/site-context'

import './radio-slider.scss'

const RadioSlider = props => {
  const { label, name, onChange, options } = props
  const siteCtx = useContext(SiteCtx)
  const visibleUiEl = useRef()
  const overlayEl = useRef()
  const overlayState = useRef()
  const selectedValue = useMemoOne(() => {
    for (const opt of options) {
      if (opt.checked) return opt.value || opt.id
    }
  }, [options])

  useEffect(() => {
    if (
      !siteCtx.isClientControlled ||
      !visibleUiEl.current ||
      selectedValue === undefined
    )
      return

    const selectedBtn = visibleUiEl.current.querySelector('button.selected')

    if (!overlayState.current) {
      // appear
      overlayState.current = 'initialized'
      Object.assign(overlayEl.current.style, {
        height: `${selectedBtn.offsetHeight}px`,
        left: `${selectedBtn.offsetLeft}px`,
        opacity: 0,
        top: `${selectedBtn.offsetTop}px`,
        width: `${selectedBtn.offsetWidth}px`,
      })
      overlayEl.current.classList.add('visible')
      animate(
        overlayEl.current,
        { opacity: 1 },
        { duration: transitionDurSeconds }
      )
    } else {
      // move
      animate(
        overlayEl.current,
        {
          left: selectedBtn.offsetLeft,
          width: selectedBtn.offsetWidth,
        },
        { duration: transitionDurSeconds, ease: 'circOut' }
      )
    }
  }, [selectedValue, siteCtx.isClientControlled])

  return (
    <div className="radio-slider">
      <div ref={visibleUiEl} aria-hidden className="visible-ui">
        <div className="label">{label}</div>
        <div className="slider">
          {options.map(opt => {
            const label = opt.label || opt.value || opt.id
            const value = opt.value || opt.id
            const optionSelected = () => {
              onChange(value)
            }

            return (
              <button
                key={opt.id}
                onClick={optionSelected}
                className={cn({ selected: opt.checked })}
              >
                {label}
              </button>
            )
          })}
          <div ref={overlayEl} className="selection-overlay" />
        </div>
      </div>

      <fieldset className="screen-reader-only">
        <legend>{label}</legend>

        {options.map(opt => {
          const label = opt.label || opt.value || opt.id
          const value = opt.value || opt.id
          const optionSelected = () => onChange(value)

          return (
            <div key={opt.id}>
              <input
                type="radio"
                id={opt.id}
                name={name}
                value={value}
                checked={opt.checked}
                onChange={optionSelected}
              />
              <label htmlFor={opt.id}>{label}</label>
            </div>
          )
        })}
      </fieldset>
    </div>
  )
}

export default RadioSlider
