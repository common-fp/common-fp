const lt3 = n => n < 3
const keepWhileLt3 = keepFirstWhile(lt3)

keepWhileLt3([1, 2, 3]) // is [1, 2]
keepWhileLt3([3, 1, 2]) // is []
