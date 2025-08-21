import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('keepFirst'), changeIsCommentToShow],
  },
  boots: {
    both: [
      prependImport('compose, get, joinValues, keepFirst, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
