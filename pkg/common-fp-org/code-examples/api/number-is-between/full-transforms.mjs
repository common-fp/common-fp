import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('numberIsBetween'), changeIsCommentToShow],
  },
  movies: {
    both: [
      prependImport('compose, get, mapValues, numberIsBetween'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
