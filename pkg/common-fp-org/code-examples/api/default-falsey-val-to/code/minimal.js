const defaultToNoName = defaultFalseyValTo('<no name>')

defaultToNoName('mary') // is mary
defaultToNoName('') // is <no name>
defaultToNoName(undefined) // is <no name>
