const truncateTo5Chars = truncateToNChars(5)

truncateTo5Chars('12345') // is '12345'
truncateTo5Chars('123456') // is '12...'
