import path from 'node:path'
import makeWithBundleAnalyzer from '@next/bundle-analyzer'
import { SassString } from 'sass'

const { dirname } = import.meta
const fromRoot = fpath => path.resolve(dirname, fpath)

const isDeveloping = process.env.IS_DEVELOPING === 'true'
const isPreview = process.env.IS_PREVIEW === 'true'

const enabled = (process.env.ANALYZE || '').toLowerCase() === 'true'
const withBundleAnalyzer = makeWithBundleAnalyzer({ enabled })

const config = {
  reactStrictMode: false,
  output: isDeveloping ? undefined : 'export',
  usingTypeScript: false,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(dirname, 'app')
    config.resolve.symlinks = true

    config.module.rules.push(
      {
        test: [
          /\/editor-types.d.ts$/,
          /\/code\/[^/]+_(tablet-and-larger|mobile-and-smaller)_/,
        ],
        use: [{ loader: fromRoot('misc/source-loader.mjs') }],
      },
      {
        test: /node_modules\/typescript\/lib\/typescript.js$/,
        use: [{ loader: fromRoot('misc/modify-ts-loader.mjs') }],
      }
    )

    // this helps with understanding dependencies and when they're loaded
    if (isPreview) {
      config.optimization.chunkIds = 'named'
      config.optimization.moduleIds = 'named'
    }

    return config
  },
  sassOptions: {
    functions: {
      'encodeURIComponent($str)': str => {
        return new SassString(encodeURIComponent(str.dartValue))
      },
      'lintUnderline($color, $isLightTheme)': (color, isLightThemeObj) => {
        const isLightTheme = isLightThemeObj.toString() === 'true'
        // the light theme requires a wider squiggle due to less contrast
        const strokeWidth = isLightTheme ? 2 : 1.2
        const svgHeight = isLightTheme ? 5 : 3
        const svgWidth = svgHeight * 2
        const prefix = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" width="${svgWidth}" height="${svgHeight}">`
        const squiggle = `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" fill="none" stroke-width="${strokeWidth}" `

        const colorStr = color.dartValue
        const svgPath = squiggle + `stroke="${colorStr}" />`
        const resultStr = prefix + encodeURIComponent(svgPath) + '</svg>'
        return new SassString(resultStr)
      },
      'lintMarkerWarning($color)': color => {
        const prefix =
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">'
        const triangle =
          '<path stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z" '

        const colorStr = color.dartValue
        const svgPath = triangle + `stroke="${colorStr}" fill="${colorStr}" />`
        const resultStr = prefix + encodeURIComponent(svgPath) + '</svg>'
        return new SassString(resultStr)
      },
      'lintMarkerError($color)': color => {
        const prefix =
          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">'
        const circle = '<circle cx="20" cy="20" r="15" stroke-width="6" '

        const colorStr = color.dartValue
        const svgPath = circle + `stroke="${colorStr}" fill="${colorStr}" />`
        const resultStr = prefix + encodeURIComponent(svgPath) + '</svg>'
        return new SassString(resultStr)
      },
    },
  },
}

export default withBundleAnalyzer(config)
