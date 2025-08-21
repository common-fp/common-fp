import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('truncateToNChars')],
  },
  notification: {
    both: [prependImport('truncateToNChars'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
