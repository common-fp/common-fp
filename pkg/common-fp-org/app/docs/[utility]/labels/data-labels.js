const dataTypes = {
  collection: ['array', 'map', 'object', 'set'],
  entryCollection: ['array', 'map', 'object'],
  keyedCollection: ['map', 'object'],
  sequence: ['array', 'string'],
  valueCollection: ['array', 'set'],
}

const dataLabels = {
  any: {
    icon: '@',
    tooltip: {
      type: 'any',
    },
  },
  array: {
    icon: 'A',
    tooltip: {
      type: 'array',
    },
  },
  Collection: {
    icon: 'C',
    tooltip: {
      type: 'Collection',
      ie: 'array, object, map or set',
    },
    matchesSearch: new Set(dataTypes.collection),
  },
  CollectionOrString: {
    icon: '&',
    tooltip: {
      type: 'Collection or string',
    },
    matchesSearch: new Set([...dataTypes.collection, 'string']),
  },
  date: {
    icon: 'D',
    tooltip: {
      type: 'date',
    },
  },
  EntryCollection: {
    icon: 'E',
    tooltip: {
      type: 'EntryCollection',
      ie: 'array, object or map',
    },
    matchesSearch: new Set(dataTypes.entryCollection),
  },
  EntryCollectionOrString: {
    icon: '$',
    tooltip: {
      type: 'EntryCollection or string',
      ie: 'array, object, map or string',
    },
    matchesSearch: new Set([...dataTypes.entryCollection, 'string']),
  },
  function: {
    icon: 'F',
    tooltip: {
      type: 'function',
    },
  },
  KeyedCollection: {
    icon: 'K',
    tooltip: {
      type: 'KeyedCollection',
      ie: 'object or map',
    },
    matchesSearch: new Set([...dataTypes.keyedCollection]),
  },
  map: {
    icon: 'P',
    tooltip: {
      type: 'map',
    },
  },
  number: {
    icon: '#',
    tooltip: {
      type: 'number',
    },
  },
  Sequence: {
    icon: 'Q',
    tooltip: {
      type: 'Sequence',
      ie: 'array or string',
    },
    matchesSearch: new Set([...dataTypes.sequence]),
  },
  string: {
    icon: 'S',
    tooltip: {
      type: 'string',
    },
  },
  ValueCollection: {
    icon: 'V',
    tooltip: {
      type: 'ValueCollection',
      ie: 'array or set',
    },
    matchesSearch: new Set([...dataTypes.valueCollection]),
  },
}

export default dataLabels
