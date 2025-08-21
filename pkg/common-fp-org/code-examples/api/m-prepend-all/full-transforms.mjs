import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mPrependAll'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  fastPass: commonTransforms,
}

export default fullTransforms
