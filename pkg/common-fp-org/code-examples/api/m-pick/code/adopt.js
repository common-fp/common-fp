const cats = {
  bella: {
    age: 3,
    notes: 'likes her alone time',
    breed: 'domestic shorthair',
  },
  leo: {
    age: 2,
    notes: 'enjoys food too much',
    breed: 'domestic longhair',
  },
  molly: {
    age: 4,
    notes: 'energetic in the morning',
    breed: 'domestic shorthair',
  },
}

const catsToAdopt = ['bella', 'leo']
const adoptBellaAndLeo = mPick(catsToAdopt)
adoptBellaAndLeo(cats)

console.log(cats)
/// is {
///   bella: {
///     age: 3
///     notes: likes her alone time
///     breed: domestic shorthair
///   }
///   leo: {
///     age: 2
///     notes: enjoys food too much
///     breed: domestic longhair
///   }
/// }
