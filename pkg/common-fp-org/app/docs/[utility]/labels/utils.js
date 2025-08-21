// low to high = display left to right
const typeToPos = {
  aka: 0,
  mutable: 1,
  async: 2,
  data: 3,
}

const byTypeThenAlphabetical = (left, right) => {
  const leftTypePos = typeToPos[left.type]
  const rightTypePos = typeToPos[right.type]
  const leftData = left.data || ''
  const rightData = right.data || ''

  return (
    leftTypePos - rightTypePos || leftData.localeCompare(rightData, undefined)
  )
}

const makeAkaLabel = alias => {
  const [source, method] = alias.split('.')

  return {
    type: 'aka',
    icon: '>',
    id: alias,
    method,
    lowerMethod: method.toLowerCase(),
    source,
    tooltip: { alias, method, source },
  }
}

const normalizeDataLabel = (data, name) =>
  Object.assign({}, data, { id: name, type: 'data' })

export { byTypeThenAlphabetical, makeAkaLabel, normalizeDataLabel }
