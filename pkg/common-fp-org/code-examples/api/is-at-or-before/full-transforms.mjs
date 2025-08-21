import { changeIsCommentToShow, prependImport } from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isAtOrBefore'), changeIsCommentToShow],
  },
}

export default fullTransforms
