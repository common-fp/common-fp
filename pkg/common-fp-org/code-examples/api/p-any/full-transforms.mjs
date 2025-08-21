import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pAny'), changeIsCommentToShow],
  },
  deal: {
    both: [prependImport('pAny'), changeLogToShow, removeComments],
  },
  series: {
    both: [prependImport('pAny, pWaitMs'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
