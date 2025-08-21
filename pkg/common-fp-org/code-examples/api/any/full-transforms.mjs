import {
  changeIsCommentToShow,
  changeLogToShow,
  prependImport,
} from '#code-example-transforms'

const fullTransforms = {
  birthday: {
    both: [prependImport('any'), changeLogToShow],
  },
  minimal: {
    both: [prependImport('any'), changeIsCommentToShow],
  },
}

export default fullTransforms
