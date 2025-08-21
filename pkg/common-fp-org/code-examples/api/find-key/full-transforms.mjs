import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('findKey')],
  },
  kitten: {
    both: [prependImport('findKey'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
