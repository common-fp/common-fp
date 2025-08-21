const schedule = {
  '2025 03 12': 'koalas',
  '2025 03 15': 'cats',
  '2025 03 17': 'pandas',
  '2025 03 18': 'koalas',
  '2025 03 20': 'cats',
  '2025 03 23': 'pandas',
}

const getRivalDates = compose([keepWhen(strictEquals('pandas')), Object.keys])

const dates = getRivalDates(schedule)
console.log(dates)
/// is [
///   2025 03 17,
///   2025 03 23,
/// ]
