const start = new Date().getTime()

const gt2 = async (n: number) => {
  const msPassed = Date.now() - start
  console.log(`ms passed: ${msPassed}, for n = ${n}`)

  await pWaitMs(20)
  return n > 2
}
const discardWhenGt2 = pDiscardWhen(gt2)<number[]>

await discardWhenGt2([2, 3, 4])
const totalMsPassed = Date.now() - start
console.log(`total ms passed: ${totalMsPassed}`)
