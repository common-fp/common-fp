import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('splitEvery'), changeIsCommentToShow],
  },
  groups: {
    both: [
      prependImport('compose, shuffle, splitEvery'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
