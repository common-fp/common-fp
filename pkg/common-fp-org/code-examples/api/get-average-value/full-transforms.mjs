import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getAverageValue'), changeIsCommentToShow],
  },
  scores: {
    both: [
      prependImport('compose, getAverageValue, roundToNearest'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
