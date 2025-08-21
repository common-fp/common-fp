import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isAtOrAfter'), changeIsCommentToShow],
  },
  warranty: {
    both: [
      prependImport('compose, get, isAtOrAfter'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
