import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('set'), changeIsCommentToShow],
  },
  leadActors: {
    both: [prependImport('mapValues, set'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
