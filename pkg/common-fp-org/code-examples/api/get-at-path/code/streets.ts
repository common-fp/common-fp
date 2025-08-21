type Address = {
  address: {
    street: string
    state: string
    zip: string
  }
}
type Directory = Record<string, Address>
const contacts: Directory = {
  chris: {
    address: {
      street: '123 Main',
      state: 'Maine',
      zip: '04841',
    },
  },
  liz: {
    address: {
      street: '987 Park',
      state: 'Maine',
      zip: '04841',
    },
  },
  phil: {
    address: {
      street: '555 Oak',
      state: 'Maine',
      zip: '04841',
    },
  },
}

const getStreet = getAtPath(['address', 'street'])<Address>
const getAllStreets = mapValues(getStreet)<Directory>
const streetByPerson = getAllStreets(contacts)
console.log(streetByPerson)
/// is {
///   chris: 123 Main
///   liz: 987 Park
///   phil: 555 Oak
/// }
