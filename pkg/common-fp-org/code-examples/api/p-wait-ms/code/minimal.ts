const start = new Date().getTime()

await pWaitMs(20)

const end = new Date().getTime()
const tookMs = end - start
console.log(tookMs) // is close to 20
