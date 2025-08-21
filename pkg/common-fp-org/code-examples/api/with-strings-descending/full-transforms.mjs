import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [
      prependImport('withStringsDescending'),
      changeLogToShow,
      removeComments,
    ],
  },
  photos: {
    both: [
      prependImport('compareByProp, get, order, withStringsDescending'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
