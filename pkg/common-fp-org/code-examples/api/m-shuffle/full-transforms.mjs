import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mShuffle'), removeComments, changeLogToShow],
  },
  clue: {
    both: [prependImport('forEach, mShuffle'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
