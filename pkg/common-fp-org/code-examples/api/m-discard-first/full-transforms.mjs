import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mDiscardFirst'), changeLogToShow, removeComments],
  },
  logs: {
    both: [
      prependImport('forEach, mDiscardFirst'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
