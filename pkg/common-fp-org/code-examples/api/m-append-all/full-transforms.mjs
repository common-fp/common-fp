import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mAppendAll'), removeComments, changeLogToShow],
  },
  junkmail: {
    both: [
      prependImport('forEach, mAppendAll'),
      removeComments,
      changeLogToShow,
    ],
  },
}

export default fullTransforms
