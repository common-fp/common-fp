import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('prepend')],
  },
  files: {
    both: [
      prependImport('prepend, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
