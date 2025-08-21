const musicQueue = ['Like a Rolling Stone', 'Smells Like Teen Spirit']
const prependMySongs = prependAll(['Superstition', 'Once in a Lifetime'])

const updatedQueue = prependMySongs(musicQueue)
console.log(updatedQueue)
/// [
///   Superstition
///   Once in a Lifetime
///   Like a Rolling Stone
///   Smells Like Teen Spirit
/// ]
