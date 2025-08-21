import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mFillRangeWith'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  cans: commonTransforms,
}

export default fullTransforms
