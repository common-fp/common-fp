import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pKeepWhen'), changeIsCommentToShow],
  },
  rewards: {
    both: [prependImport('pKeepWhen'), changeLogToShow, removeComments],
  },
  concurrent: {
    both: [prependImport('pKeepWhen, pWaitMs'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
