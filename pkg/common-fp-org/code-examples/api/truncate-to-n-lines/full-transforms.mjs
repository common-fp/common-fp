import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('truncateToNLines'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  trim: commonTransforms,
}

export default fullTransforms
