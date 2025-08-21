import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('expandStart')],
  },
  fileId: {
    both: [prependImport('expandStart'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
