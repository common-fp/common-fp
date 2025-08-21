import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('assignOverrides'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  gifts: commonTransforms,
}

export default fullTransforms
