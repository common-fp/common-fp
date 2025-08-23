import { expect } from 'chai'
import * as _ from 'common-fp'
import add from 'common-fp/add'
import * as si from '@common-fp/shared-internals'
import aOrAn from '@common-fp/shared-internals/a-or-an'

suite('import works as expected', () => {
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
