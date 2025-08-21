const [_headers, ...logs] = [
  ['server', 'realm', 'time', 'message'],
  ['east3', 'api', '10:00:05', 'user purchased hat'],
  ['east3', 'api', '10:00:06', 'purchase passed audit'],
  ['east3', 'api', '10:00:08', 'error requesting customer data'],
]

const removeServerAndRealm = mDiscardFirst(2)
const trim = forEach(removeServerAndRealm)
trim(logs)
console.log(logs)
/// is [
///  ['10:00:05', 'user purchased hat'],
///  ['10:00:06', 'purchase passed audit'],
///  ['10:00:08', 'error requesting customer data'],
/// ]
