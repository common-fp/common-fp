const aOrAn = str => {
  const prefix = /[aeiouy]/.test(str[0]) ? 'an' : 'a'
  return `${prefix} ${str}`
}

export default aOrAn
