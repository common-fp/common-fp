const start = new Date().getTime()

const gt2 = async (n: number) => {
  const msPassed = Date.now() - start
  console.log(`ms passed: ${msPassed}, for n = ${n}`)

  await pWaitMs(20)
  return n > 2
}
const findGt2 = pFind(gt2)<number[]>

await findGt2([1, 2, 3])
const totalMsPassed = Date.now() - start
console.log(`total ms passed: ${totalMsPassed}`)
