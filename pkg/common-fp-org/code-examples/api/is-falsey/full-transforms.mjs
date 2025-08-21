import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isFalsey'), changeIsCommentToShow],
  },
  applicants: {
    both: [
      prependImport('compose, isFalsey, keepWhen, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
