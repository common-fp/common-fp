import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pAll'), changeIsCommentToShow],
  },
  discount: {
    both: [prependImport('pAll'), changeLogToShow, removeComments],
  },
  series: {
    both: [prependImport('pAll, pWaitMs'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
