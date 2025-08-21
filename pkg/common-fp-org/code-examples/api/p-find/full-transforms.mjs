import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pFind'), changeIsCommentToShow],
  },
  code: {
    both: [prependImport('pFind'), changeLogToShow, removeComments],
  },
  series: {
    both: [prependImport('pFind, pWaitMs'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
