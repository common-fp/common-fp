import logLevel from './log-level'

const env = {
  logLevelName: getLogLevelName(),
}

function getLogLevelName() {
  let name
  if (process.env.NEXT_PUBLIC_LOG_LEVEL_NAME) {
    name = (process.env.NEXT_PUBLIC_LOG_LEVEL_NAME || '').toLowerCase()
    if (!Object.hasOwn(logLevel, name)) {
      const possibleNames = Object.keys(logLevel).join(', ')
      throw new Error(
        `invalid NEXT_PUBLIC_LOG_LEVEL_NAME ${name}.  Must be one of ${possibleNames}`
      )
    }
  } else {
    name = process.env.NODE_ENV === 'production' ? 'error' : 'info'
    if (!Object.hasOwn(logLevel, name)) {
      throw new Error(`invalid hardcoded log level name: ${name}`)
    }
  }

  return name
}

export default env
