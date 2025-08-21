import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('getExclusiveValues'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  exclusive: commonTransforms,
}

export default fullTransforms
