import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [changeIsCommentToShow, prependImport('discardLast')],
  },
  dice: {
    both: [
      prependImport(
        'compose, discardLast, sumValues, order, withNumbersDescending'
      ),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
