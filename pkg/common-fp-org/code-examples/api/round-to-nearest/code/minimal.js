const roundToTenth = roundToNearest('0.1')
roundToTenth(1.55) // is 1.6
roundToTenth(1.54) // is 1.5

const roundToHundreds = roundToNearest('100')
roundToHundreds(1250) // is 1300
roundToHundreds(1249) // is 1200
