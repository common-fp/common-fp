import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getKeys'), changeIsCommentToShow],
  },
  oneHundredMeter: {
    both: [prependImport('compose, keepWhen'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
