type Cat = { age: string }

type Cats = Record<string, Cat>
const cats: Cats = {
  charlie: { age: 'cat' },
  luna: { age: 'kitten' },
  max: { age: 'old cat' },
  leo: { age: 'kitten' },
}

const findKitten = findKey((cat: Cat) => cat.age === 'kitten')<Cats>
const name = findKitten(cats)
console.log(name)
// is luna
