import dedent from 'dedent'
import {
  changeLogToShow,
  prepend,
  removeComments,
} from '#code-example-transforms'

const importJs =
  dedent(`
    import { mapValues } from 'common-fp'

    const giveEveryoneAnApple = mapValues(numApples => numApples + 1)
  `) + '\n\n'

const importTs =
  dedent(`
    import { mapValues } from 'common-fp'

    const giveEveryoneAnApple = mapValues(
      (numApples: number) => numApples + 1
    )
  `) + '\n\n'

const fullTransforms = {
  both: [changeLogToShow, removeComments],
  js: [prepend(importJs)],
  ts: [prepend(importTs)],
}

export default fullTransforms
