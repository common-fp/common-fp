import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('greaterThanOrEqualTo'), changeIsCommentToShow],
  },
  rollerCoaster: {
    both: [
      prependImport('compose, greaterThanOrEqualTo, keepWhen'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
