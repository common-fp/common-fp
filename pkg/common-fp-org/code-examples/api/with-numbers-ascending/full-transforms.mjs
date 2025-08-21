import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [
      prependImport('withNumbersAscending'),
      changeLogToShow,
      removeComments,
    ],
  },
  baseball: {
    both: [
      prependImport('compareByProp, order, withNumbersAscending'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
