import akaLabels from './aka-labels'
import dataLabels from './data-labels'
import { mapValues } from '@/fp-utils'
import {
  byTypeThenAlphabetical,
  makeAkaLabel,
  normalizeDataLabel,
} from './utils'

const labels = createLabels()

const sortLabels = utilityLabels => utilityLabels.sort(byTypeThenAlphabetical)

//
//------------------//
// Helper Functions //
//------------------//

function createLabels() {
  const normalizeAll = mapValues(normalizeDataLabel)
  const data = normalizeAll(dataLabels)

  const aka = akaLabels.reduce((result, alias) => {
    result[alias] = makeAkaLabel(alias)
    return result
  }, {})

  const async = {
    icon: '⥣',
    type: 'async',
  }

  const mutable = {
    icon: 'M',
    type: 'mutable',
  }

  return {
    aka,
    async,
    data,
    mutable,
  }
}

export default labels
export { sortLabels }
