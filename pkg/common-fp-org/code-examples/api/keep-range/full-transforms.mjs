import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const freeThrowImports =
  'compose, flattenOnce, getAverageValue, keepRange, mapValues, roundToNearest'

const fullTransforms = {
  minimal: {
    both: [prependImport('keepRange'), changeIsCommentToShow],
  },
  freeThrows: {
    both: [prependImport(freeThrowImports), changeLogToShow, removeComments],
  },
}

export default fullTransforms
