import cn from 'classnames'
import { useMemo, useRef } from 'react'
import { useCallbackOne } from 'use-memo-one'

import './text-input.scss'

const TextInput = ({
  autoFocus,
  className,
  icon,
  id,
  name,
  onTextChange,
  placeholder,
}) => {
  const onChange = useCallbackOne(evt => {
    onTextChange(evt.target.value)
  })
  const inputRef = useRef()

  const focusInput = useCallbackOne(() => {
    inputRef.current.focus()
  })

  const conditionalProps = useMemo(() => {
    const result = {}
    if (id) result.id = id
    if (name) result.name = name
    if (autoFocus) result.autoFocus = autoFocus
    return result
  }, [id, name, autoFocus])

  return (
    <div className={cn('text-input', className)} onClick={focusInput}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        ref={inputRef}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...conditionalProps}
      />
      {icon}
    </div>
  )
}

export default TextInput
