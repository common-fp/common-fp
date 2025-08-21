const greetMark = greeting => {
  console.log(greeting + ' Mark')
}

const invokeWithOhHi = invokeWith(['Oh hi'])

invokeWithOhHi(greetMark)
// prints 'Oh hi Mark'
