import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getMinValue'), changeIsCommentToShow],
  },
  biking: {
    both: [
      prependImport('compose, getMinValue, mapValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
