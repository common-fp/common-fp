import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('pruneStart')],
  },
  prices: {
    both: [
      prependImport('compose, getMinValue, mapValues, pruneStart'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
