type Item = {
  name: string
  price: string
}

const results: Item[] = [
  { name: 'Texas Wild', price: '4.68' },
  { name: 'Eastern Blend', price: '5.74' },
  { name: 'Sunflower and Natural Grains', price: '6.74' },
]

const { price } = first(results) as Item
console.log(price)
// 4.68
