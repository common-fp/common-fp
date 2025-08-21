type Options = {
  name: string
  message: string
}

const defaults = {
  name: '<Name>',
  message: 'How are you?',
}

const getOptsWithDefaults = assignDefaults(defaults)

const greet = (opts: Partial<Options>) => {
  const { name, message } = getOptsWithDefaults(opts)
  console.log(`Hello ${name}.  ${message}`)
}

greet({ name: 'Grace' })
// prints "Hello Grace.  How are you?
