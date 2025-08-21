import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isTruthy'), changeIsCommentToShow],
  },
  applicants: {
    both: [
      prependImport('isTruthy, keepWhen, mapValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
