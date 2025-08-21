import { assertArgIsType } from '@common-fp/shared-internals'

const isAtOrBefore = date1 => {
  assertArgIsType(date1, 'date1', 'date', 'isAtOrBefore')

  return date2 => {
    assertArgIsType(date2, 'date2', 'date', 'isAtOrBefore')

    return date2 <= date1
  }
}

export default isAtOrBefore
