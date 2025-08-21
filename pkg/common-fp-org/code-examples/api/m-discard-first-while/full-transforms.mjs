import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mDiscardFirstWhile'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  bots: commonTransforms,
}

export default fullTransforms
