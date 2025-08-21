import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('keepWhen'), changeLogToShow, removeComments],
  },
  oneHundredMeter: {
    both: [prependImport('compose, keepWhen'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
