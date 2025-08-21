const profilePictureIds = [196, 22081, 352, 78]
const addLeadingZeroes = expandStart(5, '0')
const sortedFileNames = profilePictureIds
  .map((id: number) => {
    const normalizedId = addLeadingZeroes(`${id}`)
    return `profile-picture-${normalizedId}.jpg`
  })
  .toSorted()
  .join('\n')

console.log(sortedFileNames)
/// is
/// profile-picture-00078.jpg
/// profile-picture-00196.jpg
/// profile-picture-00352.jpg
/// profile-picture-22081.jpg
