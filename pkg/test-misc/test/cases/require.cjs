const _ = require('common-fp')
const add = require('common-fp/add')
const si = require('@common-fp/shared-internals')
const aOrAn = require('@common-fp/shared-internals/a-or-an')

suite('require works as expected', () => {
  let expect
  setup(async () => {
    expect = (await import('chai')).expect
  })

  test('root module', () => {
    const add1 = _.add(1)
    expect(add1(2)).to.equal(3)

    expect(si.aOrAn('slice of bread')).to.equal('a slice of bread')
  })

  test('sub-path', () => {
    const add1 = add(1)
    expect(add1(2)).to.equal(3)

    expect(aOrAn('slice of bread')).to.equal('a slice of bread')
  })
})
