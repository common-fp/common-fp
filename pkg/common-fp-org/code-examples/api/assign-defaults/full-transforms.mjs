import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('assignDefaults'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  greet: commonTransforms,
}

export default fullTransforms
