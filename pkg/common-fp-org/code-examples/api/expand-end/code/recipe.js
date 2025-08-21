const brownies = {
  Sugar: '1 1/2 Cups',
  Flour: '3/4 Cup',
  Cocoa: '2/3 Cup',
  'Chocolate Chips': '1/2 Cup',
  Eggs: '2',
}

const appendSpaces = expandEnd(20, ' ')

const formattedRecipe = Object.entries(brownies)
  .map(([ingredient, amount]) => {
    return appendSpaces(ingredient) + amount
  })
  .join('\n')

console.log(formattedRecipe)
/// prints
/// Sugar               1 1/2 Cups
/// Flour               3/4 Cup
/// Cocoa               2/3 Cup
/// Chocolate Chips     1/2 Cup
/// Eggs                2
