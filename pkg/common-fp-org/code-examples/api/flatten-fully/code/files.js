const assets = ['/project/assets/styles.css', '/project/assets/logo.png']

const components = [
  '/project/src/components/header.js',
  '/project/src/components/footer.js',
]

const src = ['/project/src/index.html', '/project/src/index.js', components]

const project = ['/project/package.json', assets, src]

const allProjectFiles = flattenFully(project)
console.log(allProjectFiles)
/// is [
///   /project/package.json,
///   /project/assets/styles.css,
///   /project/assets/logo.png,
///   /project/src/index.html,
///   /project/src/index.js,
///   /project/src/components/header.js,
///   /project/src/components/footer.js,
/// ]
