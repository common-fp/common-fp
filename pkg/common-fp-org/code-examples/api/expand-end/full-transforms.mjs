import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('expandEnd')],
  },
  recipe: {
    both: [prependImport('expandEnd'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
