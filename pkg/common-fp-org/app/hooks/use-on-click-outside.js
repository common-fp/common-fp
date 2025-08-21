import { useEffect } from 'react'

const useOnClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const handleClick = evt => {
      if (ref.current && !ref.current.contains(evt.target)) {
        onClickOutside()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, onClickOutside])
}

export default useOnClickOutside
