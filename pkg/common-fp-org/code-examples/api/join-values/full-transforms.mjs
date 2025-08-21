import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('joinValues'), changeIsCommentToShow],
  },
  chat: {
    both: [prependImport('joinValues'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
