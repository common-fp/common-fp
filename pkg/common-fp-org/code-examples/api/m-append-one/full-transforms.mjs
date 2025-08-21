import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mAppendOne'), removeComments, changeLogToShow],
  },
  superKitty: {
    both: [
      prependImport('forEach, mAppendOne'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
