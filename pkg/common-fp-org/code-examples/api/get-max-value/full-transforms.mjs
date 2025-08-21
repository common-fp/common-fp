import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getMaxValue'), changeIsCommentToShow],
  },
  views: {
    both: [
      prependImport('compose, get, getMaxValue, mapValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
