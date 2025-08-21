type UnknownArray = readonly unknown[]

// can't use unknown[] as default since parameter types are treated differently
// from regular types.  See more here:
// https://stackoverflow.com/questions/62136028/why-dont-parametersfunc-extend-unknown-arrayunknown-in-ts-strict-mode
type UnknownFunction = (...args: never[]) => unknown

type UnknownMap = ReadonlyMap<unknown, unknown>

type UnknownMutableArray = unknown[]

type UnknownRecord = Record<PropertyKey, unknown>

type UnknownSet = ReadonlySet<unknown>

export type {
  UnknownArray,
  UnknownFunction,
  UnknownMap,
  UnknownMutableArray,
  UnknownRecord,
  UnknownSet,
}
