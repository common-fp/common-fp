import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

// const commonTransforms = {
//   both: [prependImport('pResolveValues'), changeLogToShow, removeComments],
// }

const fullTransforms = {
  minimal: {
    both: [prependImport('pResolveValues'), changeIsCommentToShow],
  },
  prep: {
    both: [prependImport('pResolveValues'), changeLogToShow, removeComments],
  },
}

export default fullTransforms
