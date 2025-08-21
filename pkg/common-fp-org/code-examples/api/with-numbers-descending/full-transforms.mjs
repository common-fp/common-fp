import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [
      prependImport('withNumbersDescending'),
      changeLogToShow,
      removeComments,
    ],
  },
  baseball: {
    both: [
      prependImport('compareByProp, order, withNumbersDescending'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
