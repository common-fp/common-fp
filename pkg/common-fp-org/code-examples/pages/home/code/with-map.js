const applesPerPersonMap = new Map([
  ['jason', 2],
  ['amy', 3],
])

const resultMap = giveEveryoneAnApple(applesPerPersonMap)
console.log(resultMap)
/// a new Map [
///   ['jason', 3],
///   ['amy', 4],
/// ]
