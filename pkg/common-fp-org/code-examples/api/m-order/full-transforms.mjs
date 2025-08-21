import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mOrder'), removeComments, changeLogToShow],
  },
  inventory: {
    both: [
      prependImport('compareByProp, forEach, mOrder, withNumbersDescending'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
