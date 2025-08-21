const now = new Date('2025 1 15')

type Perishable = { goodUntil: Date }
type Fridge = Record<string, Perishable>
const fridge: Fridge = {
  milk: {
    goodUntil: new Date('2025 1 12'),
  },
  eggs: {
    goodUntil: new Date('2025 1 16'),
  },
}

const isStillGood = compose([get('goodUntil')<Perishable>, isAfter(now)])

const clean = keepWhen(isStillGood)<Fridge>
const freshFridge = clean(fridge)
console.log(freshFridge)
/// is {
///   eggs: {
///     goodUntil: 2025 1 16
///   }
/// }
