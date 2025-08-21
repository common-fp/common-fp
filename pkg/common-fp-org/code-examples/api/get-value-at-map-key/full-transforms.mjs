import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getValueAtMapKey'), changeIsCommentToShow],
  },
  metro: {
    both: [
      prependImport('getValueAtMapKey, mapValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
