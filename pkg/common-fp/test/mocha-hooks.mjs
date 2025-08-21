import * as spies from './spies/index.mjs'

const spyEntries = Object.entries(spies)

const afterEach = async () => resetAll(spyEntries)

async function resetAll(spies) {
  return Promise.all(
    spies.map(([_name, spy]) => {
      if (spy.isMockFn) return spy.reset()
      else if (spy && typeof spy === 'object') {
        // if the spy is an object then it's an object of even more spies :)
        return resetAll(Object.entries(spy))
      }
    })
  )
}

const mochaHooks = { afterEach }

export default mochaHooks
