import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('randomlyKeep'), changeIsCommentToShow],
  },
  chalkboard: {
    both: [prependImport('randomlyKeep'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
