const fullMenu = {
  'chicken wings': {
    price: 16,
    description: 'One pound tossed in sauce',
  },
  'smash burger': {
    price: 15,
    description: 'A double patty with classic toppings',
  },
  'chicken sandwich': {
    price: 15,
    description: 'Blacked, fresh toppings, on ciabatta',
  },
  'blt wrap': {
    price: 14,
    description: 'The classic with bacon jam and lemon aioli',
  },
}

const pickFeaturedItems = pick(['chicken wings', 'blt wrap'])
const featuredMenu = pickFeaturedItems(fullMenu)

console.log(featuredMenu)
/// prints
/// {
///   chicken wings: {
///     price: 16
///     description: One pound tossed in sauce
///   },
///   blt wrap: {
///     price: 14
///     description: The classic with bacon jam and lemon aioli
///   },
/// }
