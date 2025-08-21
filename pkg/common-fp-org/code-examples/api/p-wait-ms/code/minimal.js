const start = new Date()

await pWaitMs(20)

const end = new Date()
const tookMs = end - start
console.log(tookMs) // is close to 20
