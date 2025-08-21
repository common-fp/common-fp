import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pDiscardWhen'), changeIsCommentToShow],
  },
  shipping: {
    both: [prependImport('pDiscardWhen'), changeLogToShow, removeComments],
  },
  concurrent: {
    both: [
      prependImport('pDiscardWhen, pWaitMs'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
