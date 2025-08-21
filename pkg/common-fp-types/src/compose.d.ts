import type { UnknownFunction } from '@common-fp/shared-types'

declare function compose(fnArray: []): {
  (): undefined
  <A>(...args: [A, ...unknown[]]): A
  (...args: unknown[]): unknown
}

declare function compose<Fn extends UnknownFunction>(fnArray: [Fn]): Fn

declare function compose<
  FirstFn extends UnknownFunction,
  LastFn extends UnknownFunction,
>(
  fnArray: [FirstFn, ...UnknownFunction[], LastFn]
): (...args: Parameters<FirstFn>) => ReturnType<LastFn>

declare function compose(
  fnArray: ReadonlyArray<UnknownFunction>
): UnknownFunction

export default compose
