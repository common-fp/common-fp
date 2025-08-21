const sodaWeights = [12, 11.99, 12.2, 11.88, 12.02]

const isOutsideThreshold = (flOz: number) => flOz > 12.02 || flOz < 11.98
const discardBadSodas = discardWhen(isOutsideThreshold)<number[]>
const updatedSodas = discardBadSodas(sodaWeights)
console.log(updatedSodas)
// is [12, 11.99, 12.02]
