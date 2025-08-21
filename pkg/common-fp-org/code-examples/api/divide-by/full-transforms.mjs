import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('divideBy'), changeIsCommentToShow],
  },
  dinner: {
    both: [
      prependImport('divideBy, mapValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
