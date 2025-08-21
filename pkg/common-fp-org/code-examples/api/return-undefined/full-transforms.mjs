import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('returnUndefined'), changeIsCommentToShow],
  },
  macro: {
    both: [prependImport('returnUndefined'), changeLogToShow],
  },
}

export default fullTransforms
