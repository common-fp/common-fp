type Z5 = '00000'
type UpTo4Zeroes = '0' | '00' | '000' | '0000'
type UpTo9Zeroes = '' | UpTo4Zeroes | Z5 | `${Z5}${UpTo4Zeroes}`
type DecimalPrecisions = `0.${UpTo9Zeroes}1`
type IntegerPrecisions = `1${UpTo9Zeroes}`
type Precision = DecimalPrecisions | IntegerPrecisions

export default function (precision: Precision): (aNumber: number) => number
