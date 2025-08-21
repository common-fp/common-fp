/**
 * ReadonlySet is a quick naive solution to preventing downstream libs from
 * mutating these values.  We can create a more robust solution if/when needed.
 */

class ReadonlySet extends Set {
  constructor(iterable) {
    super()
    for (const el of iterable) super.add(el)
  }

  add() {
    throw new Error('Cannot add to ReadonlySet')
  }
  clear() {
    throw new Error('Cannot clear ReadonlySet')
  }
  delete() {
    throw new Error('Cannot delete with ReadonlySet')
  }
}

const collection = new ReadonlySet(['array', 'object', 'map', 'set'])
const entryCollection = new ReadonlySet(['array', 'object', 'map'])
const keyedCollection = new ReadonlySet(['object', 'map'])
const objectKey = new ReadonlySet(['string', 'number'])
const propertyKey = new ReadonlySet(['string', 'number', 'symbol'])
const sequence = new ReadonlySet(['array', 'string'])
const valueCollection = new ReadonlySet(['array', 'set'])

export {
  collection,
  entryCollection,
  keyedCollection,
  objectKey,
  propertyKey,
  sequence,
  valueCollection,
}
