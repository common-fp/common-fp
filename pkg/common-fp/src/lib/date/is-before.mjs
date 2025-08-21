import { assertArgIsType } from '@common-fp/shared-internals'

const isBefore = date1 => {
  assertArgIsType(date1, 'date1', 'date', 'isBefore')

  return date2 => {
    assertArgIsType(date2, 'date2', 'date', 'isBefore')

    return date2 < date1
  }
}

export default isBefore
