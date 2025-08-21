type FurtherAssertions = {
  nonNegative?: boolean
  positive?: boolean
}

export default function (
  n: number,
  argName: string,
  utilName: string,
  furtherAssertions?: FurtherAssertions
): void
