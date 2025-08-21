import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mKeepLast'), changeLogToShow, removeComments],
  },
  bookShop: {
    both: [
      prependImport('compose, joinValues, mapValues, mKeepLast, prependOne'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
