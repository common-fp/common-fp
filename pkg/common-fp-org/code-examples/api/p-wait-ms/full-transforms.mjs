import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('pWaitMs'), changeLogToShow, removeComments],
  },
  timeout: {
    both: [
      prependImport('getRandomValue, pWaitMs'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
