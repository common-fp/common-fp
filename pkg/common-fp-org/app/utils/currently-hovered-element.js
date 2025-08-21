import { debounceAndThrottle } from '@/utils'

let currentlyHoveredElement

const onMouseover = evt => {
  currentlyHoveredElement = evt.target
}

if (typeof window !== 'undefined') {
  document.addEventListener('mouseover', debounceAndThrottle(onMouseover, 100))
}

// can't export default since that won't be a live representation of the
// variable.  Isn't javascript fun
export { currentlyHoveredElement as default }
