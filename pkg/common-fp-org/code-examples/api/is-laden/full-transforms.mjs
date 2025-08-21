import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isLaden'), changeIsCommentToShow],
  },
  appointments: {
    both: [
      prependImport('compose, isLaden, joinValues, keepWhen, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
