import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('mKeepLastWhile'), changeLogToShow, removeComments],
  },
  games: {
    both: [
      prependImport('get, mapValues, mKeepLastWhile'),
      changeLogToShow,
      removeComments,
    ],
  },
}

export default fullTransforms
