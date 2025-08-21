import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mReverse'), removeComments, changeLogToShow],
  },
  email: {
    both: [prependImport('forEach, mReverse'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
