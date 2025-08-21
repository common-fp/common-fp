import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pMapValues'), changeIsCommentToShow],
  },
  shipping: {
    both: [prependImport('pMapValues'), changeLogToShow, removeComments],
  },
  concurrent: {
    both: [
      prependImport('pMapValues, pWaitMs'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
