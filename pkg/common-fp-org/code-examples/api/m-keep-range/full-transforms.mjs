import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mKeepRange'), changeLogToShow, removeComments],
  },
  football: {
    both: [
      prependImport(
        'compose, forEach, joinValues, mapValues, mKeepRange, prependOne, sumValues, transpose'
      ),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
