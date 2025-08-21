type Enemy = {
  type: string
  health: number
}
const enemy: Enemy = {
  type: 'zombie',
  health: 15,
}

const sword = {
  attack: update({ health: subtract(5) })<Enemy>,
}

const woundedEnemy = sword.attack(enemy)
console.log(woundedEnemy)
/// is {
///   type: zombie
///   health: 10
/// }
