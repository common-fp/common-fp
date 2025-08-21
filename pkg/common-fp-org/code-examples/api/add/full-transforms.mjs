import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('add'), changeIsCommentToShow],
  },
  heal: {
    both: [prependImport('add, update'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
