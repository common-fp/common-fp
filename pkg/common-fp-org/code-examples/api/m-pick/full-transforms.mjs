import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mPick'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  adopt: commonTransforms,
}

export default fullTransforms
