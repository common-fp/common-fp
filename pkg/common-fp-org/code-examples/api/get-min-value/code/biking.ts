type Trip = {
  start: string
  end: string
}

const trips: Trip[] = [
  { start: 'Jan 5 2025 10:01:32', end: 'Jan 5 2025 10:36:09' },
  { start: 'Jan 6 2025 09:40:58', end: 'Jan 6 2025 10:12:45' },
  { start: 'Jan 7 2025 09:50:01', end: 'Jan 7 2025 10:22:09' },
  { start: 'Jan 8 2025 09:45:32', end: 'Jan 8 2025 10:17:28' },
]

const toDurationMs = ({ start, end }: Trip) => {
  const endMs = new Date(end).getTime()
  const startMs = new Date(start).getTime()
  return endMs - startMs
}
const toTripTime = (durationMs: number) => {
  const duration = new Date(durationMs)
  const minutes = duration.getMinutes()
  const seconds = duration.getSeconds()
  return `${minutes}m ${seconds}s`
}
const getTripDurations = mapValues(toDurationMs)<Trip[]>
const getFastestTripTime = compose([getTripDurations, getMinValue, toTripTime])

const time = getFastestTripTime(trips)
console.log(time) // is 31m 47s
