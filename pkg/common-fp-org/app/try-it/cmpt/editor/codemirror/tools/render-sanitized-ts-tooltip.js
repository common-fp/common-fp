/**
 * this code is based off @valtown/codemirror-ts#967412c
 * src/hover/tsHoverWorker.ts
 *
 * the part.kind doesn't seem to differentiate between keyword and type, so I'm
 * hacking a workaround here for the time being.
 */

const typeKeywords = new Set(['number', 'string', 'unknown'])

const renderSanitizedTsTooltip = info => {
  const div = document.createElement('div')
  if (info.quickInfo?.displayParts) {
    for (const part of info.quickInfo.displayParts) {
      const span = div.appendChild(document.createElement('span'))
      const kind = sanitizeKind(part)
      span.className = `quick-info-${kind}`
      span.innerText = part.text
    }
  }
  return { dom: div }
}

function sanitizeKind({ kind, text }) {
  if (kind !== 'keyword') return kind

  return typeKeywords.has(text) ? 'type' : kind
}

export default renderSanitizedTsTooltip
