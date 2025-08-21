import prettyMs from 'pretty-ms'
import log from './log'

const makeLog = {
  duration: makeLogDuration,
  withContext: makeLogWithContext,
}

function makeLogDuration(logLevelName) {
  const start = new Date()
  validateName(logLevelName)
  return label => {
    log.info(`${label} - took ${prettyMs(new Date() - start)}`)
  }
}

function makeLogWithContext(logLevelName, ctx) {
  validateName(logLevelName)

  return (...args) => {
    log[logLevelName](ctx + '\n', ...args)
  }
}

function validateName(logLevelName) {
  const possibleNames = Object.keys(log).join(', ')
  if (!log[logLevelName])
    throw new Error(
      `Invalid log level name ${logLevelName}.  Must be one of ${possibleNames}`
    )
}

export default makeLog
