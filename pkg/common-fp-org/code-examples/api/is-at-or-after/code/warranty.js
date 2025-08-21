const tabletsOnDesk = [
  {
    name: 'Samsung Galaxy',
    purchaseDate: new Date('2024 6 11'),
  },
  {
    name: 'OnePlus Pad',
    purchaseDate: new Date('2023 9 21'),
  },
]

const janFirst2024 = new Date('2024 1 1')
const isEligibleForWarranty = compose([
  get('purchaseDate'),
  isAtOrAfter(janFirst2024),
])

const tabletsToRepair = tabletsOnDesk.filter(isEligibleForWarranty)
console.log(tabletsToRepair)
/// is [
///   {
///     name: Samsung Galaxy
///     purchaseDate: 2024 6 11
///   }
/// ]
