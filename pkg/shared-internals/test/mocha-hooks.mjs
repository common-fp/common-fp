import * as spies from './spies/index.mjs'

const spyEntries = Object.entries(spies)

const afterEach = async () => resetAll(spyEntries)

async function resetAll(spies) {
  return Promise.all(
    spies.map(([_name, spy]) => {
      return spy.isMockFn ?
          spy.reset()
          // if the spy isn't a mockFn, then it's an object of more spies
        : resetAll(Object.entries(spy))
    })
  )
}

const mochaHooks = { afterEach }

export default mochaHooks
