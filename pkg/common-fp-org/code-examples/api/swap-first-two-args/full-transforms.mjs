import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('swapFirstTwoArgs'), changeLogToShow, removeComments],
  },
  lower: {
    both: [changeLogToShow, removeComments],
  },
}

export default fullTransforms
