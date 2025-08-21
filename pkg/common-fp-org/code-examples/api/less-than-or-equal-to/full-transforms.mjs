import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('lessThanOrEqualTo'), changeIsCommentToShow],
  },
  restaurants: {
    both: [
      prependImport('compose, lessThanOrEqualTo, keepWhen'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
