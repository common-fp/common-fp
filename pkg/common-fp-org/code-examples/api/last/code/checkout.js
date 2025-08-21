const harryPotterCheckouts = [
  {
    name: 'jen',
    checkedOut: '2025-01-05',
    returned: '2025-02-02',
  },
  {
    name: 'mike',
    checkedOut: '2025-02-06',
    returned: '2025-02-25',
  },
  {
    name: 'luke',
    checkedOut: '2025-03-01',
  },
]

const { name } = last(harryPotterCheckouts)
console.log(name)
// is luke
