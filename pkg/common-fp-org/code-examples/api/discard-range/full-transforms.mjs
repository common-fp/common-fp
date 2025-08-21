import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('discardRange')],
  },
  bowling: {
    both: [
      prependImport('discardRange, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
