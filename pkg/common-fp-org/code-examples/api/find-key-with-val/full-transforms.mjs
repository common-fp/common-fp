import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('findKeyWithVal')],
  },
  raffle: {
    both: [prependImport('findKeyWithVal'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
