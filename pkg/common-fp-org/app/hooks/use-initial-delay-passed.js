import { useEffect, useState } from 'react'

const useInitialDelayPassed = ({ ms, reset }) => {
  const [initialDelayPassed, setInitialDelayPassed] = useState(false)

  useEffect(() => {
    setTimeout(() => setInitialDelayPassed(true), ms)
  }, [ms, reset])

  useEffect(() => {
    setInitialDelayPassed(false)
  }, [reset])

  return initialDelayPassed
}

export default useInitialDelayPassed
