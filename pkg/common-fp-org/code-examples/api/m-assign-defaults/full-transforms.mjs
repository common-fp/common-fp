import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mAssignDefaults'), removeComments, changeLogToShow],
  },
  dinner: {
    both: [
      prependImport('forEach, mAssignDefaults'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
