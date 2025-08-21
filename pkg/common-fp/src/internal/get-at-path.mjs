export default (path, anObject) => {
  if (!path.length) return anObject

  let result = anObject
  for (const key of path) {
    result = result?.[key]

    if (result === undefined) return
  }

  return result
}
