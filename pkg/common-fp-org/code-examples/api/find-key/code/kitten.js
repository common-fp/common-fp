const cats = {
  charlie: { age: 'cat' },
  luna: { age: 'kitten' },
  max: { age: 'old cat' },
  leo: { age: 'kitten' },
}

const findKitten = findKey(cat => cat.age === 'kitten')
const name = findKitten(cats)
console.log(name)
// is luna
