import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('find')],
  },
  directory: {
    both: [prependImport('find'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
