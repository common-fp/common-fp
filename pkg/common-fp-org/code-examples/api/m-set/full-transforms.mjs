import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const commonTransforms = {
  both: [prependImport('mSet'), removeComments, changeLogToShow],
}

const fullTransforms = {
  minimal: commonTransforms,
  leadActors: {
    both: [
      prependImport('compose, forEach, keepWhen, mSet'),
      removeComments,
      changeLogToShow,
    ],
  },
  error: commonTransforms,
}

export default fullTransforms
