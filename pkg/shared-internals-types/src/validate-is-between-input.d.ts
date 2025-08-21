type Opts = {
  exclusiveMin?: boolean
  exclusiveMax?: boolean
}

export default function <T>(
  val1: T,
  val1Name: string,
  val2: T,
  val2Name: string,
  type: string,
  utilName: string,
  opts?: Opts
): void
