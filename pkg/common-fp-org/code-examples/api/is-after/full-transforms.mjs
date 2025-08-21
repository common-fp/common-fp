import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isAfter'), changeIsCommentToShow],
  },
  fridge: {
    both: [
      prependImport('compose, get, isAfter, keepWhen'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
