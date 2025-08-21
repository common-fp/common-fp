import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mKeepFirstWhile'), changeLogToShow, removeComments],
  },
  limo: {
    both: [
      prependImport('get, mapValues, mKeepFirstWhile'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
