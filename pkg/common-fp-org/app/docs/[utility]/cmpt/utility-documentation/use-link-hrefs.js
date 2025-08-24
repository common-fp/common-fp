import { useContext } from 'react'
import { kebabCase } from 'change-case'
import simpleJoinPath from '@/utils/simple-join-path'
import { PageCtx } from '../../page-context'

const useLinkHrefs = () => {
  const { utility } = useContext(PageCtx)
  if (!utility) return

  const baseUrl = 'https://github.com/common-fp/common-fp/blob/main'
  const srcDir =
    baseUrl +
    simpleJoinPath([`/pkg/common-fp/src/lib`, utility.srcDir || '', '/'])
  const typesDir =
    baseUrl +
    simpleJoinPath([`/pkg/common-fp-types/src`, utility.srcDir || '', '/'])

  const fname = kebabCase(utility.name)

  return {
    src: srcDir + fname + '.mjs',
    types: typesDir + fname + '.d.ts',
  }
}

export default useLinkHrefs
