import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('multiplyBy'), changeIsCommentToShow],
  },
  dinner: {
    both: [
      prependImport(
        'compose, get, mapValues, multiplyBy, roundToNearest, sumValues'
      ),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
