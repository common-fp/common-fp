const toEnglishList = (andOr, arrOrSet) => {
  const arr = Array.isArray(arrOrSet) ? arrOrSet : [...arrOrSet]

  if (!arr.length) return ''
  if (arr.length === 1) return arr[0]

  const start = arr.slice(0, arr.length - 1).join(', ')
  const end = ` ${andOr} ${arr[arr.length - 1]}`
  return start + end
}

export default toEnglishList
