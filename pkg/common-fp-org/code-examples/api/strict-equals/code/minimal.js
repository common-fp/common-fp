const isKim = strictEquals('kim')
isKim('kim') // is true
isKim('grace') // is false

const sam = { name: 'sam' }
const isReferenceToSam = strictEquals(sam)
isReferenceToSam(sam) // is true
isReferenceToSam({ name: 'sam' }) // is false
