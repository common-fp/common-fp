const pdfLinks = [
  'More Info On Added Sugars ➚',
  'Nutrition Facts Label Resources ➚',
  'Explore The Percent Daily Value ➚',
]

const pruneLinkSymbol = pruneEnd([' ', '➚'])
const cleanLinks = mapValues(pruneLinkSymbol)<string[]>

const links = cleanLinks(pdfLinks)
console.log(links)
/// is
/// [
///   More Info On Added Sugars
///   Nutrition Facts Label Resources
///   Explore The Percent Daily Value
/// ]
