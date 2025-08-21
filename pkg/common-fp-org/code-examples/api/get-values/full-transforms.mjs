import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getValues'), changeIsCommentToShow],
  },
  popularShows: {
    both: [
      prependImport('compose, flattenOnce, getValues'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
