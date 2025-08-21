import { Collection, CT } from '@/cmpt/inline-types'
import { nbsp } from '@/utils'
import l from '../../labels'

const ReducerFn = () => (
  <CT name="ReducerFn" content="(result, val, key, collection) => result" />
)
const MakeInitialFn = () => (
  <CT name="MakeInitialFn" content="collection => initial result" />
)
const Result = () => <CT name="Result" content="result of reducerFn" />

const labels = [l.aka['_.reduce'], l.data.Collection]
const name = 'alter'
const signatures = [
  () => (
    <>
      {`(reducerFn:${nbsp}`}
      <ReducerFn />
      {`, makeInitial:${nbsp}`}
      <MakeInitialFn />
      {`)${nbsp}=> (collection:${nbsp}`}
      <Collection />
      {`)${nbsp}=> `}
      <Result />
    </>
  ),
]

export { labels, name, signatures }
