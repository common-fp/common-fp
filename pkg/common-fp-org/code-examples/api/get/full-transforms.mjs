import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('get'), changeIsCommentToShow],
  },
  conference: {
    both: [prependImport('get, mapValues'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
