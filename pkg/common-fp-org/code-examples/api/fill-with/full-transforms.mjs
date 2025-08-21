import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('fillWith')],
  },
  monopoly: {
    both: [prependImport('fillWith'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
