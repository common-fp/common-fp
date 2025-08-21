import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('findLastKey')],
  },
  opening: {
    both: [prependImport('findLastKey'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
