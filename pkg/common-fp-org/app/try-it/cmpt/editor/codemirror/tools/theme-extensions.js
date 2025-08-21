import { EditorView } from '@codemirror/view'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags } from '@lezer/highlight'

const focusedSelectionSelectors = [
  '&.cfp-focused .cm-matchingBracket',
  '.cm-tooltip-autocomplete ul li[aria-selected]',
].join(', ')

const unfocusedSelectionSelectors = [
  '.cm-content ::selection',
  '.cm-matchingBracket',
]

const theme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--bg-off)',
    color: 'var(--fg)',
    fontFamily: '"Noto Sans Mono", monospace',
    fontSize: 'var(--cm-font-size)',
    paddingTop: '8px',
  },
  '.cm-panels': {
    backgroundColor: 'var(--bg-off)',
    color: 'var(--fg)',
    zIndex: 1,
  },
  '.cm-panels-bottom': {
    borderTop: 'none',
  },
  '.cm-dropCursor, .cm-cursor': {
    borderLeftColor: 'var(--fg)',
  },
  '.cm-scroller': {
    fontFamily: '"Noto Sans Mono", monospace',
    paddingBottom: '8px',
    paddingRight: '8px',
  },
  '.cm-tooltip': {
    backgroundColor: 'var(--bg-off)',
    color: 'var(--fg)',
  },
  '.cm-activeLine, .cm-activeLineGutter, &.cfp-focused .cm-nonmatchingBracket, .cm-nonmatchingBracket':
    {
      backgroundColor: 'transparent',
    },
  '.cm-gutters': {
    backgroundColor: 'var(--bg-off)',
    borderRight: 0,
    color: 'color-mix(in srgb, var(--fg), transparent 60%)',
  },

  /**
   * search match styles
   */
  '.cm-searchMatch.cm-searchMatch-selected': {
    backgroundColor:
      'color-mix(in srgb, var(--cm-search-match), transparent 40%)',
  },
  '.cm-searchMatch': {
    backgroundColor:
      'color-mix(in srgb, var(--cm-search-match), transparent 65%)',
  },
  '&:not(.cfp-focused) .cm-searchMatch.cm-searchMatch-selected, &:not(.cfp-focused) .cm-searchMatch':
    {
      backgroundColor:
        'color-mix(in srgb, var(--cm-search-match), transparent 85%)',
    },

  /**
   * selection styles
   */
  '&.cfp-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
    backgroundColor: 'color-mix(in srgb, var(--cm-selection), transparent 40%)',
  },
  '.cm-selectionMatch': {
    backgroundColor: 'color-mix(in srgb, var(--cm-selection), transparent 65%)',
  },
  '.cm-selectionBackground,&:not(.cfp-focused) .cm-selectionMatch': {
    backgroundColor: 'color-mix(in srgb, var(--cm-selection), transparent 85%)',
  },

  [focusedSelectionSelectors]: {
    backgroundColor: 'color-mix(in srgb, var(--cm-selection), transparent 40%)',
  },
  [unfocusedSelectionSelectors]: {
    backgroundColor: 'color-mix(in srgb, var(--cm-selection), transparent 85%)',
  },
  '.cm-diagnosticSource': {
    marginTop: '8px',
  },
})

const highlightStyle = HighlightStyle.define([
  { tag: tags.keyword, class: 'cm-keyword' },
  { tag: tags.comment, class: 'cm-comment' },
  { tag: tags.literal, class: 'cm-literal' },
  { tag: tags.string, class: 'cm-string' },
  { tag: tags.name, class: 'cm-name' },
  { tag: tags.propertyName, class: 'cm-property-name' },
  { tag: tags.typeName, class: 'cm-type-name' },
  {
    tag: tags.function(tags.name),
    class: 'cm-function-name',
  },
])
const themeExtensions = [theme, syntaxHighlighting(highlightStyle)]

export default themeExtensions
