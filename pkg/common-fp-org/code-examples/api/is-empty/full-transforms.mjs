import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isEmpty'), changeIsCommentToShow],
  },
  appointments: {
    both: [
      prependImport('compose, isEmpty, joinValues, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
