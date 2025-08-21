const adScript = `The Avett Brothers are playing tonight!
 Come see them  \n\n  \tlive at Red Rocks. \n\n\n\n  \tThe first caller who
 names the lead singer's debut\t \n\n solo album gets 2 free tickets.`

const pruneWhitespace = prune([' ', '\t'])
const removeStrayNewlines = replaceAllMatches('\n', '')

const format = compose([
  split('\n\n'),
  mapValues(removeStrayNewlines),
  mapValues(pruneWhitespace),
  joinValues('\n'),
])

const formattedScript = format(adScript)
console.log(formattedScript)
/// prints
/// The Avett Brothers are playing tonight! Come see them
/// live at Red Rocks.
///
/// The first caller who names the lead singer's debut
/// solo album gets 2 free tickets.
