import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('appendAll'), changeIsCommentToShow],
  },
  students: {
    both: [prependImport('appendAll'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
