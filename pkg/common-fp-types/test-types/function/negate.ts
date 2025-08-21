import { describe, expect, test } from 'tstyche'
import negate from '#src/function/negate'

describe('compare/negate', () => {
  test('type predicate', () => {
    type Dog = { name: 'dog' }
    type Fox = { name: 'fox' }
    type Animal = Dog | Fox

    const isDog = (animal: Animal): animal is Dog => animal.name === 'dog'
    const isFox = negate(isDog)
    expect(isFox).type.toBe<(data: Animal) => data is Fox>()

    const animal = {} as Animal
    if (isFox(animal)) expect(animal).type.toBe<Fox>()
    else expect(animal).type.toBe<Dog>()
  })

  test('general', () => {
    const gt2 = (n: number) => n > 2
    const lte2 = negate(gt2)

    expect(lte2).type.toBe<typeof gt2>()
  })
})
