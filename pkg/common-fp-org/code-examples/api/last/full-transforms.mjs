import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('last')],
  },
  checkout: {
    both: [prependImport('last'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
