import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('prependAll'), changeIsCommentToShow],
  },
  music: {
    both: [prependImport('prependAll'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
