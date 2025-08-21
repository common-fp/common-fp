const start = new Date().getTime()

const logMsPassed = async (n: number) => {
  const msPassed = Date.now() - start
  console.log(`ms passed: ${msPassed}, for n = ${n}`)

  await pWaitMs(20)
}
const logMsPassedForAll = pForEach(logMsPassed)<number[]>

await logMsPassedForAll([1, 2, 3])
const totalMsPassed = Date.now() - start
console.log(`total ms passed: ${totalMsPassed}`)
