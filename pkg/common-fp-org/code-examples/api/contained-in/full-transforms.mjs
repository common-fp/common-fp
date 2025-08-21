import { changeIsCommentToShow, prependImport } from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('containedIn'), changeIsCommentToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  students: commonTransforms,
}

export default fullTransforms
