const cards = {
  rooms: ['ballroom', 'conservatory', 'lounge'],
  suspects: ['Colonel Mustard', 'Miss Scarlet', 'Professor Plum'],
  weapons: ['dagger', 'rope', 'wrench'],
}

const shuffleEachGroup = forEach(mShuffle)
shuffleEachGroup(cards)

console.log(cards)
// each group of cards will be randomly ordered
