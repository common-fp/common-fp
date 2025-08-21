import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('order'), removeComments, changeLogToShow],
  },
  inventory: {
    both: [
      prependImport('compareByProp, mapValues, order, withNumbersDescending'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
