import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('all'), changeIsCommentToShow],
  },
  party: {
    both: [
      prependImport('all, compose, keepWhen'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
