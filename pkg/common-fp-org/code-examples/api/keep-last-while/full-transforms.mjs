import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('keepLastWhile'), changeIsCommentToShow],
  },
  shows: {
    both: [
      prependImport('compose, get, keepLastWhile, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
