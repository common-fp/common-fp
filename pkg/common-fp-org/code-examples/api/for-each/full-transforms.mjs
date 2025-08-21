import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const common = {
  both: [prependImport('forEach'), changeLogToShow, removeComments],
}

const fullTransforms = {
  minimal: common,
  analytics: common,
}

export default fullTransforms
