import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('transpose'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  differentLengths: commonTransforms,
  forecast: {
    both: [
      prependImport('compose, joinValues, mapValues, prepend, transpose'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
