const currentDirectory = '/home/ken/projects/my-website/'
const directoryFiles = ['index.html', 'styles.css', 'scripts.js']

const prependDir = prepend(currentDirectory)
const getDirectoryFilePaths = mapValues(prependDir)<string[]>
const directoryFilePaths = getDirectoryFilePaths(directoryFiles)

console.log(directoryFilePaths)
/// is
/// [
///   /home/ken/projects/my-website/index.html
///   /home/ken/projects/my-website/styles.css
///   /home/ken/projects/my-website/scripts.js
/// ]
