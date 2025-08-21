export default function (
  num1: number,
  num2: number,
  opts?: {
    exclusiveMin?: boolean
    exclusiveMax?: boolean
  }
): (aNumber: number) => boolean
