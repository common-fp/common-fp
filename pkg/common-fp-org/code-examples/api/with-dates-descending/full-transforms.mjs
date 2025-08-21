import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [
      prependImport('withDatesDescending'),
      changeLogToShow,
      removeComments,
    ],
  },
  comments: {
    both: [
      prependImport('compareByProp, order, withDatesDescending'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
