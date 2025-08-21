import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('first')],
  },
  cheap: {
    both: [prependImport('first'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
