import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('replaceAllMatches')],
  },
  weather: {
    both: [
      prependImport('mapValues, replaceAllMatches'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
