import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('invert'), changeIsCommentToShow],
  },
  stocks: {
    both: [
      prependImport('compose, invert, joinValues, mapValues, prepend'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
