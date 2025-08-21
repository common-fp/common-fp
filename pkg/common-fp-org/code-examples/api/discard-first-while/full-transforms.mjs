import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('discardFirstWhile')],
  },
  scores: {
    both: [prependImport('discardFirstWhile'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
