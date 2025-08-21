const orders = {
  mike: ['burger', 'fries'],
  luke: ['chicken sandwich', 'soda'],
}

const addSuperKitty = mAppendOne('super kitty')
const addSuperKitties = forEach(addSuperKitty)
addSuperKitties(orders)
console.log(orders)
/// is {
///   mike: [burger, fries, super kitty]
///   luke: [chicken sandwich, soda, super kitty]
/// }
