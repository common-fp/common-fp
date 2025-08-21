import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('startsWith')],
  },
  notebook: {
    both: [
      prependImport('any, compose, startsWith, keepWhen'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
