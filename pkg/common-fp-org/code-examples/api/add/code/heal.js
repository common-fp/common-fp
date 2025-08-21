const heal = update({ health: add(5) })

const hero = { health: 2, name: 'meg' }

const healedHero = heal(hero)
console.log(healedHero)
/// is {
///   health: 7
///   name: meg
/// }
