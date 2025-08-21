import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mAssignOverrides'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  pirateGuild: commonTransforms,
}

export default fullTransforms
