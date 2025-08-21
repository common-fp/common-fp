type Item = {
  name: string
  weight: number
}
type Inventory = Record<string, Item[]>
const inventory: Inventory = {
  potions: [
    { name: 'heal', weight: 5 },
    { name: 'cloak', weight: 8 },
    { name: 'attack up', weight: 6 },
  ],
  weapons: [
    { name: 'sword', weight: 10 },
    { name: 'axe', weight: 30 },
    { name: 'wand', weight: 8 },
  ],
}

const byWeightDesc = compareByProp('weight', withNumbersDescending)<Item>
const orderByWeightDesc = order(byWeightDesc)<Item>
const orderAllByWeightDesc = mapValues(orderByWeightDesc)<Inventory>
const orderedInventory = orderAllByWeightDesc(inventory)

console.log(orderedInventory)
/// is {
///   potions: [
///     { name: cloak, weight: 8 }
///     { name: attack up, weight: 6 }
///     { name: heal, weight: 5 }
///   ]
///   weapons: [
///     { name: axe, weight: 30 }
///     { name: sword, weight: 10 }
///     { name: wand, weight: 8 }
///   ]
/// }
