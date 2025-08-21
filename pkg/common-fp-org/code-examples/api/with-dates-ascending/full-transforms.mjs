import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [
      prependImport('withDatesAscending'),
      changeLogToShow,
      removeComments,
    ],
  },
  comments: {
    both: [
      prependImport('compareByProp, order, withDatesAscending'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
