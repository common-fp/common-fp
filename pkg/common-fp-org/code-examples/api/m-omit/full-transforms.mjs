import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mOmit'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  employees: commonTransforms,
}

export default fullTransforms
