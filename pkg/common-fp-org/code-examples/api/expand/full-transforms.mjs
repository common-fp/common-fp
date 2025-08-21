import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('expand'), changeIsCommentToShow],
  },
  comment: {
    both: [prependImport('expand'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
