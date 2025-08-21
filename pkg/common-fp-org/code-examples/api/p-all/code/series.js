const start = new Date().getTime()

const gt2 = async n => {
  const msPassed = Date.now() - start
  console.log(`ms passed: ${msPassed}, for n = ${n}`)

  await pWaitMs(20)
  return n > 2
}
const allGt2 = pAll(gt2)

await allGt2([3, 4, 5])
const totalMsPassed = Date.now() - start
console.log(`total ms passed: ${totalMsPassed}`)
