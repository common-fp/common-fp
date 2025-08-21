import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('split'), changeIsCommentToShow],
  },
  csv: {
    both: [
      prependImport('compose, mapValues, split'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
