import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('pPassThrough'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  total: commonTransforms,
  series: {
    both: [
      prependImport('pPassThrough, pWaitMs'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
