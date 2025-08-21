const prepInstructions = {
  bacon: [
    'ensure it is fully thawed',
    'open bag with scissors',
    'place in cambro diagonally',
    'wrap the cambro with saran wrap and lid',
  ],
  tuna: [
    'place dried tuna into bowl',
    'break tuna apart',
    'add half a bag of mayo to bowl',
    'knead mayo into tuna',
  ],
}

const prependGloveStep = mPrependOne('wash hands and put on gloves')
const addGloveStepToAll = forEach(prependGloveStep)
addGloveStepToAll(prepInstructions)

console.log(prepInstructions)
/// is {
///   bacon: [
///     wash hands and put on gloves
///     ensure it is fully thawed
///     open bag with scissors
///     place in cambro diagonally
///     wrap the cambro with saran wrap and lid
///   ]
///   tuna: [
///     wash hands and put on gloves
///     place dried tuna into bowl
///     break tuna apart
///     add half a bag of mayo to bowl
///     knead mayo into tuna
///   ]
/// }
