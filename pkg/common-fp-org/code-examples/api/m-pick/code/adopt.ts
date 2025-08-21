type Cat = {
  age: number
  notes: string
  breed: string
}
type Cats = Record<string, Cat>
const cats: Cats = {
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
const adoptBellaAndLeo = mPick(catsToAdopt)<Cats>
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
