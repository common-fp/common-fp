const pxToNum = (pxStr, fallback = 0) => {
  if (!pxStr) return fallback

  if (!pxStr.endsWith('px'))
    throw new Error("pxStr must be a string ending in 'px'")
  const num = pxStr.slice(0, -2)

  if (!isNumericString(num))
    throw new Error("pxStr must be a numeric string ending in 'px'")

  return Number(num)
}

function isNumericString(str) {
  const decimalRe = /[0-9]+\.?[0-9]+/
  const intRe = /[0-9]+/

  return intRe.test(str) || decimalRe.test(str)
}

export default pxToNum
