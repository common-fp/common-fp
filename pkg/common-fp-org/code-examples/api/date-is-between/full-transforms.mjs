import { changeIsCommentToShow, prependImport } from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('dateIsBetween'), changeIsCommentToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  expired: commonTransforms,
}

export default fullTransforms
