import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('fillRangeWith')],
  },
  schedule: {
    both: [prependImport('fillRangeWith'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
