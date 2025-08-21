import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('returnFirstArg'), changeIsCommentToShow],
  },
  sword: {
    both: [prependImport('returnFirstArg'), changeLogToShow],
  },
}

export default fullTransforms
