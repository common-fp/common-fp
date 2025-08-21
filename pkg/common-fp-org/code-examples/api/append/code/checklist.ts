const itemsDone = [
  'email professor',
  'wish mom a happy birthday',
  'geology homework',
]
const itemsToDo = ['get cat food', 'apply for internship']

const format = (items: string[], marker: string) => {
  const markItem = append(' ' + marker)
  return items.map(markItem).join('\n')
}
const list = `
Items done
----------
${format(itemsDone, '🗹')}

Items to do
-----------
${format(itemsToDo, '☐')}
`

console.log(list)
/// prints
///
/// Items done
/// ----------
/// email professor 🗹
/// wish mom a happy birthday 🗹
/// geology homework 🗹
///
/// Items to do
/// -----------
/// get cat food ☐
/// apply for internship ☐
