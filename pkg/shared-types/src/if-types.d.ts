/**
 * modified slightly from
 * https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
 *
 * what changed: wrapped conditionals in tuples to cover
 * union types e.g. boolean
 *
 * purpose: we need this to test whether the key type is equal to the value type
 * when defining the collection - specifically to account for the case of a Set
 *
 * note: there is a lot of discussion around various IfEqual user-land
 * implementations and the consensus is no solution will be perfect.  My goal is
 * to cover most typical use cases.
 *
 * part of the discussion can be found here:
 * https://github.com/microsoft/TypeScript/issues/48100
 */
type IfEqual<X, Y> =
  (<T>() => [T] extends [X] ? 1 : 2) extends <T>() => [T] extends [Y] ? 1 : 2
    ? X
    : never

/**
 * from here
 * https://stackoverflow.com/a/68232834/984407
 *
 * this type helps in the case of a Collection where
 * `Collection<unknown, unkown>` should match all collections.
 */
type IfUnknownOrAny<T> = unknown extends T ? T : never

export type { IfEqual, IfUnknownOrAny }
