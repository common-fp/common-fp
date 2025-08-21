import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('pruneEnd')],
  },
  links: {
    both: [
      prependImport('mapValues, pruneEnd'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
