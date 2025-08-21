import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('omit'), changeIsCommentToShow],
  },
  employees: {
    both: [prependImport('omit'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
