import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('flattenFully')],
  },
  files: {
    both: [prependImport('flattenFully'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
