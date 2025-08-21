import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mapValues'), changeLogToShow, removeComments],
}

const fullTransforms = {
  dataType1: commonTransforms,
  dataType2: commonTransforms,
}

export default fullTransforms
