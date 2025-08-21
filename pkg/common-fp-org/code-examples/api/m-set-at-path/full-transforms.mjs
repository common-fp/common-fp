import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mSetAtPath'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  preference: commonTransforms,
  errors: commonTransforms,
}

export default fullTransforms
