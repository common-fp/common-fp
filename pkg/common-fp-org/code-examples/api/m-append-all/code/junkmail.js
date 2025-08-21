const mailboxes = {
  101: ['water bill'],
  102: ['birthday card'],
  103: [],
}

const addJunkmail = mAppendAll(['pizza coupon', 'housing ad'])
const deliverJunkmail = forEach(addJunkmail)
deliverJunkmail(mailboxes)
console.log(mailboxes)
/// is {
///   101: water bill, pizza coupon, housing ad
///   102: birthday card, pizza coupon, housing ad
///   103: pizza coupon, housing ad
/// }
