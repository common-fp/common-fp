import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('compose')],
  },
  weather: {
    both: [
      prependImport('compose, get, getAverageValue, mapValues, roundToNearest'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
