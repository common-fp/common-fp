type ArgObj<T> = {
  argType: string
  argName: string
  sharedArg: T
  sharedArgName: string
  utilName: string
}

export default function <T>(argObj: ArgObj<T>): void
