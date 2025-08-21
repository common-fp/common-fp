const lt3 = n => n < 3
const discardFirstWhileLt3 = discardFirstWhile(lt3)

discardFirstWhileLt3([1, 2, 3, 4]) // is [3, 4]
discardFirstWhileLt3([3, 4, 1]) // is [3, 4, 1]
