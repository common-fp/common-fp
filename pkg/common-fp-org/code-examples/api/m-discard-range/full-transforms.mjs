import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mDiscardRange'), changeLogToShow, removeComments],
  },
  visitors: {
    both: [
      prependImport('compose, getAverageValue, mDiscardRange, roundToNearest'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
