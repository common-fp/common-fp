type PrepInstructions = Record<string, string[]>
const prepInstructions: PrepInstructions = {
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

const prependGloveStep = mPrependOne('wash hands and put on gloves')<string[]>
const addGloveStepToAll = forEach(prependGloveStep)<PrepInstructions>
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
