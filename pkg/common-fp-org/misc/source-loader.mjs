// import { urlToRequest } from 'loader-utils'

/**
 * Webpack 5 recommends applying "type: 'asset/source'" to load the source of
 * files, however that doesn't work in our case because it seems further
 * processing is applied which I'm unsure how to override in next.js. I won't
 * pretend to understand how this is all working, but sourceLoader does what I
 * need and it's simple, so movin on :)
 */

export default function sourceLoader(source) {
  // console.log('request: ' + urlToRequest(this.resourcePath))
  return 'export default ' + JSON.stringify(source)
}
