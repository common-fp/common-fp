import env from './env'
import logLevel from './log-level'

const curLogLevel = logLevel[env.logLevelName] || logLevel.error

const log = {
  info,
  error,
}

function info(...args) {
  if (curLogLevel > logLevel.info) return

  console.log(...args)
}

function error(...args) {
  console.error(...args)
}

export default log
export { logLevel }
