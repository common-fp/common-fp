import {
  assertArgIsType,
  validateIsBetweenInput,
} from '@common-fp/shared-internals'

const dateIsBetween = (date1, date2, opts = {}) => {
  let { exclusiveMin, exclusiveMax } = opts

  validateIsBetweenInput(
    date1,
    'date1',
    date2,
    'date2',
    'date',
    'dateIsBetween',
    opts
  )

  const [min, max] = date1 <= date2 ? [date1, date2] : [date2, date1]
  if (exclusiveMin === undefined) exclusiveMin = false
  if (exclusiveMax === undefined) exclusiveMax = false

  return aDate => {
    assertArgIsType(aDate, 'aDate', 'date', 'dateIsBetween')

    const minCheck = exclusiveMin ? aDate > min : aDate >= min
    if (!minCheck) return false

    return exclusiveMax ? aDate < max : aDate <= max
  }
}

export default dateIsBetween
