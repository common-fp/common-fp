import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('flattenOnce')],
  },
  family: {
    both: [prependImport('flattenOnce'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
