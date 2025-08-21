import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('strictEquals'), changeIsCommentToShow],
  },
  rivals: {
    both: [
      prependImport('compose, keepWhen, strictEquals'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
