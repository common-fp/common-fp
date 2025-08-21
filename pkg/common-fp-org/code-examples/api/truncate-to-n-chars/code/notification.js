const longText =
  "Hi, my name is Liz Brown from Volley Fun.  We're hosting\n" +
  'a weekend coed tournament where proceeds go to our local\n' +
  'animal shelter.  First prize also gets $200.  Would you\n' +
  'or anyone you know be interested in signing up?'

const truncateTo50Chars = truncateToNChars(50)

const notification = truncateTo50Chars(longText)
console.log(notification)
