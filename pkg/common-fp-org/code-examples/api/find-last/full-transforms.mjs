import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('findLast')],
  },
  movies: {
    both: [prependImport('findLast'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
