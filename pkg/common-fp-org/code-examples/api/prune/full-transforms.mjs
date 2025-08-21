import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('prune')],
  },
  promo: {
    both: [
      prependImport(
        'compose, joinValues, mapValues, passThrough, prune, replaceAllMatches, split'
      ),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
