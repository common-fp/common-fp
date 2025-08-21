// from typescript.JSDocParsingMode.ParseAll
const parseAll = 0

const defaultParseSettings = {
  allowInvalidAST: false,
  code: '',
  codeFullText: '',
  comment: true,
  comments: [],
  debugLevel: new Set(),
  errorOnTypeScriptSyntacticAndSemanticIssues: true,
  errorOnUnknownASTType: true,
  extraFileExtensions: [],
  filePath: '',
  jsDocParsingMode: parseAll,
  jsx: false,
  loc: true,
  log: console.log,
  preserveNodeMaps: true,
  programs: null,
  projects: new Map(),
  projectService: undefined,
  range: true,
  singleRun: false,
  suppressDeprecatedPropertyWarnings: false,
  tokens: [],
  tsconfigMatchCache: new Map(),
  tsconfigRootDir: '/',
}

export default defaultParseSettings
