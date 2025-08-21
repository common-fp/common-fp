const stock = new Set(['socks', 'football', 'pillows'])
const storeApi = {
  isInStock: async (item: string) => {
    // let's time out half the time
    const durationMs = getRandomValue([10, 70])
    await pWaitMs(durationMs)
    return stock.has(item)
  },
}

const areSocksInStock = storeApi.isInStock('socks')
const timeout = async () => {
  await pWaitMs(50)
  return 'call took longer than 50ms'
}

const result = await Promise.race([timeout(), areSocksInStock])
console.log(result)
/// half the time this will show 'true'
/// the other half will show the timeout string
