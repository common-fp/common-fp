import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('append')],
  },
  checklist: {
    both: [prependImport('append'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
