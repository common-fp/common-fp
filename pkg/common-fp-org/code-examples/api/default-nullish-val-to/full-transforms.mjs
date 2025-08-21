import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('defaultNullishValTo'), changeIsCommentToShow],
  },
  monopoly: {
    both: [
      prependImport('defaultNullishValTo, mapValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
