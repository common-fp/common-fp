import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mPrependOne'), removeComments, changeLogToShow],
  },
  prep: {
    both: [
      prependImport('forEach, mPrependOne'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
