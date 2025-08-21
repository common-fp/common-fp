// from https://github.com/p2227/universal-eol/blob/25d5629bd5b6e39a1c483e0e1a551513ae80b95c/eol.mjs
// version 0.0.3
// modified to work in web-workers
const runningInWebworker =
  typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope

let platform
if (runningInWebworker) {
  platform = 'webworker'
} else if (typeof window === 'undefined') {
  platform = process.platform
} else {
  platform = navigator.platform
}

const EOL = /win/i.test(platform) ? '\r\n' : '\n'

export default EOL
