const dates = [
  new Date('2025 03 15'),
  new Date('2025 03 14'),
  new Date('2025 03 16'),
]
const updatedDates = dates.toSorted(withDatesAscending)
console.log(updatedDates)
/// is [
///   2025 03 14
///   2025 03 15
///   2025 03 16
/// ]
