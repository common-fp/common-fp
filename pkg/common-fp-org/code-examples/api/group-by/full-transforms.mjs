import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('groupBy'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  jetSkis: commonTransforms,
}

export default fullTransforms
