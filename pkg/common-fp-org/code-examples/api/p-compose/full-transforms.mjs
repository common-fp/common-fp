import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pCompose'), changeIsCommentToShow],
  },
  total: {
    both: [prependImport('pCompose'), changeLogToShow, removeComments],
  },
  series: {
    both: [prependImport('pCompose, pWaitMs'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
