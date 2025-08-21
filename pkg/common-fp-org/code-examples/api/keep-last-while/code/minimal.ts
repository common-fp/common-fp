const keepLastWhileGt1 = keepLastWhile((n: number) => n > 1)

keepLastWhileGt1([1, 2, 3]) // is [2, 3]
keepLastWhileGt1([2, 3, 1]) // is []
