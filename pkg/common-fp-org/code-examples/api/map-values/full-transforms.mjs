import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mapValues'), changeIsCommentToShow],
  },
  conference: {
    both: [prependImport('get, mapValues'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
