import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('subtract'), changeIsCommentToShow],
  },
  attack: {
    both: [prependImport('subtract, update'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
