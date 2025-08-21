import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mFillWith'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  baseball: commonTransforms,
}

export default fullTransforms
