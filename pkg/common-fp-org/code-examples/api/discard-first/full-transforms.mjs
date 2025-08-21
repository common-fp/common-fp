import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('discardFirst')],
  },
  chess: {
    both: [
      prependImport('discardFirst, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
