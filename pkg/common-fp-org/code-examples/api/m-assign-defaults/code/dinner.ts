type Dinner = {
  side: 'rice' | 'salad'
  main: 'chicken' | 'tofu'
}

const defaultDinner: Dinner = {
  side: 'rice',
  main: 'chicken',
}

type Orders = Record<string, Dinner>
const orders: Orders = {
  emma: {
    side: 'salad',
    main: 'tofu',
  },
  meg: {
    side: 'salad',
  } as Dinner,
  tom: {} as Dinner,
}

const assignDefaultDinner = mAssignDefaults(defaultDinner)
const assignDinners = forEach(assignDefaultDinner)<Orders>
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
