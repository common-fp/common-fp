export {}

declare function show(...anything: any[]): void

declare global {
  function show(...anything: any[]): void
}

declare function setTimeout(
  handler: TimerHandler,
  timeout?: number,
  ...arguments: any[]
): number
