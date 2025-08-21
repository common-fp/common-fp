import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('passThrough, peek'), changeLogToShow, removeComments],
  },
  debug: {
    both: [
      prependImport(
        'compose, get, getMaxValue, mapValues, multiplyBy, peek, roundToNearest'
      ),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
