import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('findLastKeyWithVal')],
  },
  weight: {
    both: [
      prependImport('findLastKeyWithVal'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
