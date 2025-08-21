import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getRandomValue'), changeIsCommentToShow],
  },
  first: {
    both: [prependImport('getRandomValue'), removeComments, changeLogToShow],
  },
}

export default fullTransforms
