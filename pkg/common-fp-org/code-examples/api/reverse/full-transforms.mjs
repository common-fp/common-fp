import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('reverse'), changeIsCommentToShow],
  },
  email: {
    both: [
      prependImport('mapValues, reverse'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
