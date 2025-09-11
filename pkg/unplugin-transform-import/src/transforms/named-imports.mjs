import { kebabCase } from 'change-case'

const transformNamedImports = ({ parsed, ms }) => {
  for (const info of parsed) {
    const newImports = []
    for (const [name, nameInfo] of Object.entries(info.names)) {
      const nameOrig = nameInfo.by || name
      const subPathId = `common-fp/${kebabCase(nameOrig)}`
      newImports.push(`import ${name} from '${subPathId}'`)
    }
    ms.overwrite(info.start, info.end, newImports.join('\n'))
  }
}

export default transformNamedImports
