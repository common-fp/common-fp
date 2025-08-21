import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('sumValues'), changeIsCommentToShow],
  },
  subtotal: {
    both: [
      prependImport('compose, mapValues, sumValues'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
