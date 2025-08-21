/**
 * See note in ./configured-eslint-js-rules for rationale
 */

const configuredTypescriptEslintRules = {
  ...buildRulesWithCategory(getErrors(), 'error', '@typescript-eslint/'),
  ...buildRulesWithCategory(getWarnings(), 'warn', '@typescript-eslint/'),
  ...buildRulesWithCategory(getEslintRulesToDisable(), 'off'),
}

function buildRulesWithCategory(ruleNames, category, prefix = '') {
  return ruleNames.reduce((rules, name) => {
    rules[`${prefix}${name}`] = category
    return rules
  }, {})
}

function getErrors() {
  return [
    'ban-ts-comment',
    'no-require-imports',
    'no-unsafe-declaration-merging',
    'triple-slash-reference',
  ]
}

function getWarnings() {
  return [
    'no-array-constructor',
    'no-duplicate-enum-values',
    'no-empty-object-type',
    'no-explicit-any',
    'no-extra-non-null-assertion',
    'no-misused-new',
    'no-namespace',
    'no-non-null-asserted-optional-chain',
    'no-this-alias',
    'no-unnecessary-type-constraint',
    'no-unsafe-function-type',
    'no-unused-expressions',
    'no-unused-vars',
    'no-wrapper-object-types',
    'prefer-as-const',
    'prefer-namespace-keyword',
  ]
}

function getEslintRulesToDisable() {
  return ['no-array-constructor', 'no-unused-expressions', 'no-unused-vars']
}

export default configuredTypescriptEslintRules
