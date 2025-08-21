import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [
      prependImport('withStringsAscending'),
      changeLogToShow,
      removeComments,
    ],
  },
  photos: {
    both: [
      prependImport('compareByProp, get, order, withStringsAscending'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
