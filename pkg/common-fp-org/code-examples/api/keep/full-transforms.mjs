import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('keep')],
  },
  volunteers: {
    both: [prependImport('compose, keep'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
