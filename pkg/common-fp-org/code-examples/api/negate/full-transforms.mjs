import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('negate'), changeIsCommentToShow],
  },
  chat: {
    both: [prependImport('mSet, negate'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
