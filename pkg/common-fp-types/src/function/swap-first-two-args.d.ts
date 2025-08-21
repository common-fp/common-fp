import type { UnknownFunction } from '@common-fp/shared-types'

// unknown doesn't work as a param type for this use case
/* eslint-disable @typescript-eslint/no-explicit-any */
type RestOfParams<F extends UnknownFunction> =
  F extends (a1: any, a2: any, ...rest: infer R) => unknown ? R : never

type NoParams<F extends UnknownFunction> =
  Parameters<F> extends never[] ? F : never
type OneParam<F extends UnknownFunction> =
  Parameters<F> extends [unknown] ? F : never
type AtLeastOneParam<F extends UnknownFunction> =
  Parameters<F> extends [unknown, ...unknown[]] ? F : never
type TwoParams<F extends UnknownFunction> =
  Parameters<F> extends [unknown, unknown] ? F : never
type AtLeastTwoParams<F extends UnknownFunction> =
  Parameters<F> extends [unknown, unknown, ...unknown[]] ? F : never

/* eslint-enable @typescript-eslint/no-explicit-any */

// I'm unsure if typical function overloading can work in this case.  At least I
// couldn't figure it out.

export default function <F extends UnknownFunction>(
  fn: F
): F extends NoParams<F> ? () => ReturnType<F>
: F extends OneParam<F> ?
  (arg1: unknown, arg2: Parameters<F>[0]) => ReturnType<F>
: F extends TwoParams<F> ?
  (arg1: Parameters<F>[1], arg2: Parameters<F>[0]) => ReturnType<F>
: F extends AtLeastTwoParams<F> ?
  (
    arg1: Parameters<F>[1],
    arg2: Parameters<F>[0],
    ...rest: RestOfParams<F>
  ) => ReturnType<F>
: F extends AtLeastOneParam<F> ?
  (
    arg1: Parameters<F>[1] | undefined,
    arg2: Parameters<F>[0],
    ...rest: RestOfParams<F>
  ) => ReturnType<F>
: (
    arg1?: Parameters<F>[1],
    arg2?: Parameters<F>[0],
    ...rest: RestOfParams<F>
  ) => ReturnType<F>
