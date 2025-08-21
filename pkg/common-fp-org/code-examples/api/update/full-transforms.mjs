import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('update'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  gift: {
    both: [prependImport('appendOne, update'), removeComments, changeLogToShow],
  },
  notes: commonTransforms,
}

export default fullTransforms
