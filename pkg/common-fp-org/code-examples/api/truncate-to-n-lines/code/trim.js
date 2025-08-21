const longStackTrace = `Error: unable to connect to database
  at connectToDb (file:///app/db/connect.mjs:25:9)
  at queryDatabase (file:///app/db/query.mjs:21:3)
  at getCarsByModel (file:///app/api/cars.mjs:15:10)
  at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
  at next (/app/node_modules/express/lib/router/route.js:131:13)
  at Route.dispatch (/app/node_modules/express/lib/router/route.js:112:3)
  at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
  at /app/node_modules/express/lib/router/index.js:277:22`

const truncateTo5Lines = truncateToNLines(5)

const trace = truncateTo5Lines(longStackTrace)
console.log(trace)
/// is
/// Error: unable to connect to database
///   at connectToDb (file:///app/db/connect.mjs:25:9)
///   at queryDatabase (file:///app/db/query.mjs:21:3)
///   at getCarsByModel (file:///app/api/cars.mjs:15:10)
///   at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
/// ...
