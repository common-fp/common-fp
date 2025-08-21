import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('discardLastWhile')],
  },
  gold: {
    both: [prependImport('discardLastWhile'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
