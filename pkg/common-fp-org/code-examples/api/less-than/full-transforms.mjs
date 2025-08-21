import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('lessThan'), changeIsCommentToShow],
  },
  scooters: {
    both: [
      prependImport('compose, lessThan, keepWhen'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
