import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('replaceFirstMatch')],
  },
  data: {
    both: [
      prependImport('compose, joinValues, mapValues, replaceFirstMatch, split'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
