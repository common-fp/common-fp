import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('keepFirstWhile'), changeIsCommentToShow],
  },
  oneHundredMeter: {
    both: [
      prependImport('compose, get, keepFirstWhile, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
