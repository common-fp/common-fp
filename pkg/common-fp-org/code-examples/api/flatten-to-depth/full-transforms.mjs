import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('flattenToDepth')],
  },
  bonus: {
    both: [prependImport('flattenToDepth'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
