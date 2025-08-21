import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mDiscardLastWhile'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: commonTransforms,
  accounts: commonTransforms,
}

export default fullTransforms
