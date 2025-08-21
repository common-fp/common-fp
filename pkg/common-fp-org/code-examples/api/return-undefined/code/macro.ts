type UnknownFunction = (...args: never[]) => unknown

const doNothing = returnUndefined

// keyboard customizer
const initKeyboardConfig = () => {
  const keyboard: Record<string, UnknownFunction> = {
    macro1: doNothing,
  }

  const cfg = {
    pressMacro1: () => keyboard.macro1(),
    assignMacro1: (fn: UnknownFunction) => {
      keyboard.macro1 = fn
    },
    unassignMacro1: () => {
      keyboard.macro1 = doNothing
    },
  }

  return cfg
}

const config = initKeyboardConfig()
const result1 = config.pressMacro1()
console.log(result1) // is undefined

const typeMacro1 = () => 'macro1'
config.assignMacro1(typeMacro1)
const result2 = config.pressMacro1()
console.log(result2) // is 'macro1'

config.unassignMacro1()
const result3 = config.pressMacro1()
console.log(result3) // is undefined
