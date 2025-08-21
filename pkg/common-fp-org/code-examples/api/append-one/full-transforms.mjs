import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('appendOne')],
  },
  cart: {
    both: [prependImport('appendOne'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
