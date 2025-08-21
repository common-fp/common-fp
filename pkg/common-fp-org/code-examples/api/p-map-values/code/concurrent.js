const start = new Date().getTime()

const inc = async n => {
  const msPassed = Date.now() - start
  console.log(`ms passed: ${msPassed}, for n = ${n}`)

  await pWaitMs(20)
  return n + 1
}
const incAll = pMapValues(inc)

await incAll([1, 2, 3])
const totalMsPassed = Date.now() - start
console.log(`total ms passed: ${totalMsPassed}`)
