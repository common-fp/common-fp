import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getSize'), changeIsCommentToShow],
  },
  students: {
    both: [
      prependImport('compose, getSize, mapValues, sumValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
