const rolls = [1, 6, 2, 4]

const orderDesc = order(withNumbersDescending)
const removeTwoLowestRolls = discardLast(2)

const getCharacterStat = compose([orderDesc, removeTwoLowestRolls, sumValues])

const strength = getCharacterStat(rolls)
console.log(strength) // is 10
