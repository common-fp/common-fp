import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('shuffle'), changeIsCommentToShow],
  },
  turns: {
    both: [prependImport('shuffle'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
