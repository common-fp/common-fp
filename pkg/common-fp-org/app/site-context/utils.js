/**
 * This is its own file so esbuild doesn't have to worry about tree-shaking
 * unnecessary imports e.g. react
 *
 * Also, because this is processed by esbuild, we can't use import aliases. I
 * tried their alias plugin but couldn't get it to work.
 */
import getEditorDataFromUrl from '../utils/get-editor-data-from-url.js'

const initialContext = {
  isClientControlled: false,
  language: 'js',
}
const localStorageKey = 'site-context'
const lsItem = globalThis.localStorage?.getItem(localStorageKey)
const initialCtx = lsItem ? JSON.parse(lsItem) : initialContext

const page = typeof window === 'undefined' ? '' : document.location.pathname

if (page === '/try-it') {
  initialCtx.language = getEditorDataFromUrl().language || initialCtx.language
}

export { initialCtx, localStorageKey }
