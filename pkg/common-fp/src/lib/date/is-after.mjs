import { assertArgIsType } from '@common-fp/shared-internals'

const isAfter = date1 => {
  assertArgIsType(date1, 'date1', 'date', 'isAfter')

  return date2 => {
    assertArgIsType(date2, 'date2', 'date', 'isAfter')

    return date2 > date1
  }
}

export default isAfter
