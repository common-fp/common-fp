import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mMapValues'), changeLogToShow, removeComments],
  },
  sale: {
    both: [
      prependImport('compose, mMapValues, multiplyBy, roundToNearest'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
