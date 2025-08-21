declare const collection: ReadonlySet<'array' | 'object' | 'map' | 'set'>
declare const entryCollection: ReadonlySet<'array' | 'object' | 'map'>
declare const keyedCollection: ReadonlySet<'object' | 'map'>
declare const objectKey: ReadonlySet<'string' | 'number'>
declare const propertyKey: ReadonlySet<'string' | 'number' | 'symbol'>
declare const sequence: ReadonlySet<'array' | 'string'>
declare const valueCollection: ReadonlySet<'array' | 'set'>

export {
  collection,
  entryCollection,
  keyedCollection,
  objectKey,
  propertyKey,
  sequence,
  valueCollection,
}
