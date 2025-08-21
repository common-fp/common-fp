const enforcedPirateWear = {
  hat: 'pirate hat',
  eyewear: 'eye patch',
}

const assignEnforcedClothing = mAssignOverrides(enforcedPirateWear)

const JenkinsOutfit = {
  hat: 'propeller cap',
  eyewear: 'welding goggles',
  pants: 'loin cloth',
}

assignEnforcedClothing(JenkinsOutfit)
console.log(JenkinsOutfit)
/// is {
///   hat: pirate hat
///   eyewear: eye patch
///   pants: loin cloth
/// }
