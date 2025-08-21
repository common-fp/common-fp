type Orders = Record<string, string[]>
const orders: Orders = {
  mike: ['burger', 'fries'],
  luke: ['chicken sandwich', 'soda'],
}

const addSuperKitty = mAppendOne('super kitty')<string[]>
const addSuperKitties = forEach(addSuperKitty)<Orders>
addSuperKitties(orders)
console.log(orders)
/// is {
///   mike: [burger, fries, super kitty]
///   luke: [chicken sandwich, soda, super kitty]
/// }
