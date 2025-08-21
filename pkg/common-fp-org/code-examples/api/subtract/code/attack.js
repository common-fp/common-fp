const sword = {
  attack: update({ health: subtract(5) }),
}

const enemy = {
  type: 'zombie',
  health: 15,
}

const woundedEnemy = sword.attack(enemy)
console.log(woundedEnemy)
/// is {
///   type: zombie
///   health: 10
/// }
