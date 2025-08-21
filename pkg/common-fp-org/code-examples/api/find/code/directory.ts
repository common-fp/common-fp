type Resident = {
  name: string
  phone: string
}
type Directory = Record<number, Resident>
const directory: Directory = {
  101: { name: 'meg', phone: '555-1873' },
  102: { name: 'tom', phone: '555-7692' },
  103: { name: 'ken', phone: '555-4405' },
}

const findTom = find((resident: Resident) => resident.name === 'tom')<Directory>
const tom = findTom(directory) as Resident
console.log(tom.phone)
// is 555-7692
