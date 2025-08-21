import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('defaultFalseyValTo'), changeIsCommentToShow],
  },
  teddy: {
    both: [
      prependImport('defaultFalseyValTo, mapValues, update'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
