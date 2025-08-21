import type { UnknownFunction } from '@common-fp/shared-types'

declare function pCompose(fnArray: readonly []): {
  (): Promise<undefined>
  <A>(...args: [A, ...unknown[]]): Promise<A>
  (...args: unknown[]): Promise<unknown>
}

declare function pCompose<Fn extends UnknownFunction>(
  fnArray: readonly [Fn]
): (...params: Parameters<Fn>) => Promise<Awaited<ReturnType<Fn>>>

declare function pCompose<
  FirstFn extends UnknownFunction,
  LastFn extends UnknownFunction,
>(
  fnArray: readonly [FirstFn, ...UnknownFunction[], LastFn]
): (...args: Parameters<FirstFn>) => Promise<Awaited<ReturnType<LastFn>>>

declare function pCompose(
  fnArray: ReadonlyArray<UnknownFunction>
): (...args: never[]) => Promise<unknown>

export default pCompose
