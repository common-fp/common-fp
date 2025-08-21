/**
 * This old whitelist solution is based off SO:
 * https://stackoverflow.com/a/10796616/984407
 *
 * And modified as-needed.  I looked a bit for a better solution but came
 * up empty
 */

import globalWhitelist from './global-whitelist.mjs'

const wl = globalWhitelist

export default () => {
  // We have to disable fetch separately.  See here:
  // https://github.com/Zirak/SO-ChatBot/blob/accbfb4b8738781afaf4f080a6bb0337e13f7c25/source/codeWorker.js#L87
  globalThis.fetch = undefined

  Object.getOwnPropertyNames(globalThis).forEach(function (prop) {
    const isWhitelisted = Object.hasOwn(wl, prop)
    const isConfigurable = Object.getOwnPropertyDescriptor(
      globalThis,
      prop
    ).configurable
    if (!isWhitelisted && isConfigurable) {
      Object.defineProperty(globalThis, prop, {
        get: function () {
          throw new Error('Security Exception: cannot access ' + prop)
        },
        configurable: false,
      })
    }
  })

  Object.getOwnPropertyNames(globalThis.__proto__).forEach(function (prop) {
    const isWhitelisted = Object.hasOwn(wl, prop)
    const isConfigurable = Object.getOwnPropertyDescriptor(
      globalThis.__proto__,
      prop
    ).configurable
    if (!isWhitelisted && isConfigurable) {
      Object.defineProperty(globalThis.__proto__, prop, {
        get: function () {
          throw new Error('Security Exception: cannot access ' + prop)
        },
        configurable: false,
      })
    }
  })

  const joinIsConfigurable = Object.getOwnPropertyDescriptor(
    Array.prototype,
    'join'
  ).configurable
  if (joinIsConfigurable) {
    Object.defineProperty(Array.prototype, 'join', {
      writable: false,
      configurable: false,
      enumerable: false,

      value: (function (old) {
        return function (arg) {
          if (this.length > 500 || (arg && arg.length > 500)) {
            throw new Error('too many items')
          }

          return old.apply(this, arguments)
        }
      })(Array.prototype.join),
    })
  }
}
