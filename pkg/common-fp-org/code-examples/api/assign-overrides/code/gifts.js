const requiredGifts = {
  teacher: 'apple',
}

const makeGiftList = assignOverrides(requiredGifts)

const giftList = makeGiftList({
  teacher: 'coal',
  sam: 'pokemon card',
  jen: 'phone case',
})

console.log(giftList)
/// is {
///   teacher: 'apple',
///   sam: 'pokemon card',
///   jen: 'phone case'
/// }
