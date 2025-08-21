import { forceLinting } from '@codemirror/lint'
import { lint } from './get-lint-ext'

const forceLint = async ({ code, language, view }) => {
  await lint({ langId: language, code, view })
  forceLinting(view)
}

export default forceLint
