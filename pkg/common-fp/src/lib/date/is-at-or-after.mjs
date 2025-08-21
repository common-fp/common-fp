import { assertArgIsType } from '@common-fp/shared-internals'

const isAtOrAfter = date1 => {
  assertArgIsType(date1, 'date1', 'date', 'isAtOrAfter')

  return date2 => {
    assertArgIsType(date2, 'date2', 'date', 'isAtOrAfter')

    return date2 >= date1
  }
}

export default isAtOrAfter
