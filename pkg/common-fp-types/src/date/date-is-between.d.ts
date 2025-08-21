export default function (
  date1: Date,
  date2: Date,
  opts?: {
    exclusiveMin?: boolean
    exclusiveMax?: boolean
  }
): (aDate: Date) => boolean
