import { changeIsCommentToShow, prependImport } from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('isBefore'), changeIsCommentToShow],
  },
}

export default fullTransforms
