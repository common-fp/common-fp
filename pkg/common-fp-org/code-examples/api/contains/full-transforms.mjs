import { changeIsCommentToShow, prependImport } from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('contains'), changeIsCommentToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  classroom: commonTransforms,
}

export default fullTransforms
