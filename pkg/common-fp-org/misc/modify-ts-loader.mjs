/**
 * this gets around an issue where a typescript require expression causes the
 * warning: "Critical dependency: the request of a dependency is an expression"
 * the code we're affecting is from microsoft/TypeScript#56a0825
 * src/compiler/sys.ts:1619, and exposes a node interface which we don't use
 * since we're in the browser
 */

export default function modifyTsLoader(source) {
  return source.replace('require(modulePath)', '{}')
}
