import {
  changeLogToShow,
  prependImport,
  removeComments,
} from '#code-example-transforms'

const fullTransforms = {
  minimal: {
    both: [prependImport('getCommonValues'), changeLogToShow, removeComments],
  },
  available: {
    js: [prependImport('compose, getCommonValues')],
    ts: [prependImport('compose, getCommonValues, getValues')],
    both: [changeLogToShow, removeComments],
  },
}

export default fullTransforms
