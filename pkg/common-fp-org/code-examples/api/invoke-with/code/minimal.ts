const greetMark = (greeting: string) => {
  console.log(greeting + ' Mark')
}

const invokeWithOhHi = invokeWith(['Oh hi'])

invokeWithOhHi(greetMark)
// prints 'Oh hi Mark'
