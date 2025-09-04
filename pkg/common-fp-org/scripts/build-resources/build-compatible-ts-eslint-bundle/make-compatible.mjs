const makeCompatible = content => {
  const replacements = getReplacements()
  let compatibleContent = content
  for (const { from, to } of replacements) {
    compatibleContent = compatibleContent.replaceAll(from, to)
  }
  return compatibleContent
}

function getReplacements() {
  return [
    {
      from: 'var freeGlobal = typeof window == "object" && window && window.Object === Object && window;',
      to: 'var freeGlobal = false;',
    },
    {
      from: 'if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {',
      to: 'if (false) {',
    },
    {
      from: 'typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table)',
      to: 'false',
    },
    {
      from: ': typeof window !== "undefined" ? window : typeof window !== "undefined" ? window ',
      to: '',
    },
    {
      from: ' "undefined" != typeof window ? window : "undefined" != typeof window ? window :',
      to: '',
    },
    {
      from: 'if (!(namespace in window)) {',
      to: 'if (true) {',
    },
  ]
}

export default makeCompatible
