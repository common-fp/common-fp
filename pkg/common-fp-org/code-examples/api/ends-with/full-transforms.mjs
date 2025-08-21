import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('endsWith')],
  },
  notebook: {
    both: [
      prependImport('any, compose, endsWith, keepWhen'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
