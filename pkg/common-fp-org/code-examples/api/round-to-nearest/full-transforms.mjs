import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('roundToNearest'), changeIsCommentToShow],
  },
  race: {
    both: [
      prependImport('mapValues, roundToNearest'),
      changeLogToShow,
      removeComments,
    ],
  },
  errors: {
    both: [prependImport('roundToNearest'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
