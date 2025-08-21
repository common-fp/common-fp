const now = new Date('2025 1 15')

const fridge = {
  milk: {
    goodUntil: new Date('2025 1 12'),
  },
  eggs: {
    goodUntil: new Date('2025 1 16'),
  },
}

const isStillGood = compose([get('goodUntil'), isAfter(now)])

const clean = keepWhen(isStillGood)
const freshFridge = clean(fridge)
console.log(freshFridge)
/// is {
///   eggs: {
///     goodUntil: 2025 1 16
///   }
/// }
