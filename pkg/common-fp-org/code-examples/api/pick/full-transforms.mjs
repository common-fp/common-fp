import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pick'), changeIsCommentToShow],
  },
  featured: {
    both: [prependImport('pick'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
