const defaultDinner = {
  side: 'rice',
  main: 'chicken',
}

const orders = {
  emma: {
    side: 'salad',
    main: 'tofu',
  },
  meg: {
    side: 'salad',
  },
  tom: {},
}

const assignDefaultDinner = mAssignDefaults(defaultDinner)
const assignDinners = forEach(assignDefaultDinner)
assignDinners(orders)
console.log(orders)
/// is {
///   emma: {
///     side: salad
///     main: tofu
///   }
///   meg: {
///     side: salad
///     main: chicken
///   }
///   tom: {
///     side: rice
///     main: chicken
///   }
/// }
