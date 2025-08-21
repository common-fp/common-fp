import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mUpdate'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  gift: {
    both: [
      prependImport('mAppendOne, mUpdate'),
      removeComments,
      changeLogToShow,
    ],
  },
  notes: commonTransforms,
}

export default fullTransforms
