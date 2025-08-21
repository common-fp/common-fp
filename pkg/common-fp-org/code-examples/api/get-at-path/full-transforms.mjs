import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getAtPath'), changeIsCommentToShow],
  },
  streets: {
    both: [
      prependImport('getAtPath, mapValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
