import { Fragment } from 'react'
import dedent from 'dedent'
import GlossaryItem from '@/cmpt/glossary-item'
import Tooltip, { TooltipActivator, TooltipContent } from '@/cmpt/tooltip'
import { nbsp, nbsp2 } from '@/utils'

import './inline-types.scss'

const Any = () => <T name="any" />

const AnyPredicate = () => (
  <CT name="Predicate" content="(...args: any[]) => boolean" />
)

const ArrayOf = ({ type }) => (
  <>
    <T name={`${type}`} />
    []
  </>
)

const ArrayPredicate = () => (
  <CT name="Predicate" content="(value, idx, array) => boolean" />
)

const Character = () => <CT name="Character" content="string of length 1" />

const CNumbers = () => {
  const content = `array, object, map or set with number values`
  return <CT name="Numbers" content={content} />
}

const Collection = () => (
  <CT name="Collection" content="array, object, map or set" />
)

const CollectionPredicate = () => (
  <CT name="Predicate" content="(value, key, collection) => boolean" />
)

const CollectionPredicateAsync = () => (
  <CT
    name="AsyncPredicate"
    content="async (value, key, collection) => boolean"
  />
)

const CompareFn = () => (
  <CT name="CompareFn" content="(left, right) => number" />
)

const Either = ({ arr }) => {
  const LastType = arr.at(-1)

  return (
    <span className="either">
      {arr.slice(0, -1).map((Type, idx) => (
        <Fragment key={idx}>
          <Type />
          {`${nbsp}|${nbsp}`}
        </Fragment>
      ))}
      <LastType />
    </span>
  )
}

const EntryKey = () => {
  const dataType = <GlossaryItem id="data-type" text="data type" />

  return (
    <CT name="EntryKey">
      This depends on the {dataType}
      <dl className="entry-key">
        <dt>array</dt>
        <dd>
          <TNumber />
        </dd>

        <dt>object</dt>
        <dd>
          <TString />
          {nbsp2}|{nbsp2}
          <TNumber />
        </dd>

        <dt>map</dt>
        <dd>
          <Any />
        </dd>
      </dl>
    </CT>
  )
}

const Falsey = () => (
  <a
    target="_blank"
    href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy"
  >
    falsey
  </a>
)

const EntryCollection = () => (
  <CT name="EntryCollection" content="object, map or array" />
)

const IsBetweenOpts = () => {
  const betweenOptsStr = dedent(`
    {
    ${nbsp2}exclusiveMin?:${nbsp}boolean
    ${nbsp2}exclusiveMax?:${nbsp}boolean
    }
  `)

  return (
    <CT name="Options">
      <pre>
        <code>{betweenOptsStr}</code>
      </pre>
    </CT>
  )
}

const KeyedCollection = () => (
  <CT name="KeyedCollection" content="object or map" />
)

const KeyOrIndex = () => <CT name="Key" content="key or index of collection" />

const Nullish = () => <CT name="Nullish" content="null or undefined" />

const Path = () => (
  <CT name="Path" content="an array of strings, numbers and/or symbols" />
)

const PropertyKey = () => (
  <CT name="PropertyKey" content="string, number or symbol" />
)

const Range = () => {
  const rangeStr = dedent(`
    {
    ${nbsp2}startIdx:${nbsp}number
    ${nbsp2}endIdx:${nbsp}number
    }
  `)

  return (
    <CT name="Range">
      <pre>
        <code>{rangeStr}</code>
      </pre>
    </CT>
  )
}

const Sequence = () => <CT name="Sequence" content="array or string" />

const TArray = () => <T name="array" />
const TAsync = () => <T name="async" />
const TBoolean = () => <T name="boolean" />
const TDate = () => <T name="date" />
const TFunction = () => <T name="function" />
const TMap = () => <T name="map" />
const TNumber = () => <T name="number" />
const TObject = () => <T name="object" />
const TPromise = () => <T name="promise" />
const TRegex = () => <T name="regex" />
const TString = () => <T name="string" />
const TUndefined = () => <T name="undefined" />

const ValueCollection = () => (
  <CT name="ValueCollection" content="array or set" />
)

const ValueOf = ({ type }) => <CT name="Value" content={`value of ${type}`} />
Object.assign(ValueOf, {
  Array: () => <ValueOf type="array" />,
  Collection: () => <ValueOf type="collection" />,
  Map: () => <ValueOf type="map" />,
})

function CT({ children, name, content }) {
  return (
    <Tooltip closeDelay={false}>
      <TooltipActivator Tag="span">
        <span className="inline-type custom">{name}</span>
      </TooltipActivator>
      <TooltipContent>{content || children}</TooltipContent>
    </Tooltip>
  )
}

function T({ name }) {
  return <span className="inline-type">{name}</span>
}

export {
  Any,
  AnyPredicate,
  ArrayOf,
  ArrayPredicate,
  Character,
  CNumbers,
  Collection,
  CollectionPredicate,
  CollectionPredicateAsync,
  CompareFn,
  CT,
  Either,
  EntryCollection,
  EntryKey,
  Falsey,
  IsBetweenOpts,
  KeyedCollection,
  KeyOrIndex,
  Nullish,
  Path,
  PropertyKey,
  Range,
  Sequence,
  T,
  TArray,
  TAsync,
  TBoolean,
  TDate,
  TFunction,
  TMap,
  TNumber,
  TObject,
  TPromise,
  TRegex,
  TString,
  TUndefined,
  ValueCollection,
  ValueOf,
}
