const start = new Date().getTime()

const logMsPassed = async n => {
  const msPassed = Date.now() - start
  console.log(`ms passed: ${msPassed}, for n = ${n}`)

  await pWaitMs(20)
}
const logMsPassedForAll = pForEach(logMsPassed)

await logMsPassedForAll([1, 2, 3])
const totalMsPassed = Date.now() - start
console.log(`total ms passed: ${totalMsPassed}`)
