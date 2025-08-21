/**
 * These configurations are opinionated and I may change my mind.  My current
 * rationale is errors are things that either *will* throw errors at runtime or
 * is code that crosses my threshold for being "too unexpected" or
 * "too unnecessary".  E.g. duplicate keys, unreachable code, irregular
 * whitespace etc. - these are all things I think should be removed prior to the
 * code being ran.  Warnings on the other hand I think are good indicators to
 * the user their code may be off - however the code is fine to run.
 */

const configuredEslintJsRules = {
  ...buildRulesWithCategory(getErrors(), 'error'),
  ...buildRulesWithCategory(getWarnings(), 'warn'),
  ...buildRulesWithCategory(getRulesToTurnOff(), 'off'),
}

function buildRulesWithCategory(ruleNames, category) {
  return ruleNames.reduce((rules, name) => {
    rules[name] = category
    return rules
  }, {})
}

function getErrors() {
  return [
    'constructor-super',
    'for-direction',
    'no-compare-neg-zero',
    'no-const-assign',
    'no-constant-binary-expression',
    'no-delete-var',
    'no-dupe-args',
    'no-dupe-class-members',
    'no-dupe-else-if',
    'no-dupe-keys',
    'no-duplicate-case',
    'no-empty-pattern',
    'no-global-assign',
    'no-import-assign',
    'no-invalid-regexp',
    'no-irregular-whitespace',
    'no-loss-of-precision',
    'no-misleading-character-class',
    'no-new-native-nonconstructor',
    'no-obj-calls',
    'no-redeclare',
    'no-self-assign',
    'no-setter-return',
    'no-shadow-restricted-names',
    'no-this-before-super',
    'no-undef',
    'no-unexpected-multiline',
    'no-unreachable',
    'no-unsafe-finally',
    'no-unsafe-optional-chaining',
    'no-useless-backreference',
    'use-isnan',
    'valid-typeof',
  ]
}

function getWarnings() {
  return [
    'getter-return',
    'no-async-promise-executor',
    'no-case-declarations',
    'no-class-assign',
    'no-cond-assign',
    'no-constant-condition',
    'no-control-regex',
    'no-empty',
    'no-empty-character-class',
    'no-empty-static-block',
    'no-ex-assign',
    'no-fallthrough',
    'no-func-assign',
    'no-nonoctal-decimal-escape',
    'no-octal',
    'no-prototype-builtins',
    'no-regex-spaces',
    'no-sparse-arrays',
    'no-unsafe-negation',
    'no-unused-labels',
    'no-unused-private-class-members',
    'no-unused-vars',
    'no-useless-catch',
    'no-useless-escape',
    'no-with',
    'require-yield',
  ]
}

function getRulesToTurnOff() {
  // putting 'no-extra-boolean-cast' since I often prefer the code to read
  // 'true' or 'false' rather than 'truthy' or 'falsey'
  return ['no-debugger', 'no-extra-boolean-cast']
}

export default configuredEslintJsRules
