import createSitemap from './create-sitemap.mjs'

run()

async function run() {
  try {
    await Promise.all([createSitemap()])
  } catch (err) {
    console.error('error during post-build\n', err)
  }
}
