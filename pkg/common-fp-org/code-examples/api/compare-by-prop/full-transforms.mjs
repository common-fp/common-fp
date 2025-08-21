import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('compareByProp'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
}

export default fullTransforms
