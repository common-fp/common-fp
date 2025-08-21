import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('pForEach'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  track: commonTransforms,
  concurrent: {
    both: [prependImport('pForEach, pWaitMs'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
