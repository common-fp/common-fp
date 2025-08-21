import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('passThrough')],
  },
  weather: {
    both: [
      prependImport(
        'passThrough, get, getAverageValue, mapValues, roundToNearest'
      ),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
