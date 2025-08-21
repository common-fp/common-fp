import dedent from 'dedent'
import deepEql from 'deep-eql'
import { isErrorWithMessage, throwsErrorWithMessage } from './utils.mjs'

export default {
  randomlyKeep: {
    minimal: [
      actualArr => {
        const expectedChars = new Set('abcd')
        return (
          actualArr.length === 2 &&
          expectedChars.has(actualArr[0]) &&
          expectedChars.has(actualArr[1])
        )
      },
      ['a'],
    ],
    chalkboard: [
      actualArr => {
        const expectedNames = new Set(['tom', 'ken', 'chris', 'liz'])
        return (
          actualArr.length === 2 &&
          expectedNames.has(actualArr[0]) &&
          expectedNames.has(actualArr[1])
        )
      },
    ],
  },
  replaceAllMatches: {
    minimal: ['This is my cat Pete.  Pete is a good cat.'],
    weather: [
      'Today it will be sunny with a high of 33°C. Tomorrow we get a breather, where the high will dip down to 28°C.',
      '\nToday it will be cloudy with a high of 29°C. Tomorrow it clears up but drops down a little with a high of 26°C.',
    ],
  },
  replaceFirstMatch: {
    minimal: ['gaaaah!'],
    data: [
      dedent(`
        low <--> high,precipitation%
        72 <--> 84,0
        70 <--> 85,15
        62 <--> 74,40
      `),
    ],
  },
  returnFirstArg: {
    minimal: ['a', undefined],
    sword: [
      {
        name: 'sword',
        prefix: '',
        weight: 5,
        damage: 7,
        speed: 3,
      },
      {
        name: 'sword',
        prefix: 'light',
        weight: 3,
        damage: 5,
        speed: 5,
      },
    ],
  },
  returnUndefined: {
    minimal: {
      js: [undefined, undefined],
      ts: [undefined],
    },
    macro: [undefined, 'macro1', undefined],
  },
  reverse: {
    minimal: [['c', 'b', 'a']],
    email: [
      {
        work: [
          {
            time: '08:52am',
            subject: 'Meeting at 9 cancelled',
          },
          {
            time: '10:03am',
            subject: 'Lunch at Arbys?',
          },
          {
            time: '01:15pm',
            subject: 'Follow up about review',
          },
        ],
        daycare: [
          {
            time: '07:39am',
            subject: 'Bill adjustment approval',
          },
          {
            time: '03:01pm',
            subject: 'Emma has been great!',
          },
        ],
      },
    ],
  },
  roundToNearest: {
    minimal: [1.6, 1.5, 1300, 1200],
    race: [
      [
        { name: 'sarah', time: 15.93 },
        { name: 'matt', time: 16.14 },
        { name: 'jason', time: 15.91 },
      ],
    ],
    errors: {
      js: [
        isErrorWithMessage(
          dedent(`
            Without a decimal, roundToNearest requires a precision passing the regex /^10{0,9}$/
              precision: 2
          `)
        ),
        isErrorWithMessage(
          dedent(`
            With a decimal, roundToNearest requires a precision passing the regex /^0\\.0{0,9}1$/
              precision: 0.2
          `)
        ),
      ],
      ts: [
        throwsErrorWithMessage(
          dedent(`
            Without a decimal, roundToNearest requires a precision passing the regex /^10{0,9}$/
              precision: 2
          `)
        ),
      ],
    },
  },
  set: {
    minimal: [{ a: 'c' }, ['a', 'b', 'c']],
    leadActors: [
      [
        { name: 'Matthew McConaughey', isLead: true },
        { name: 'Woody Harrelson', isLead: true },
        { name: 'Michelle Monaghan' },
        { name: 'Michael Potts' },
        { name: 'Tory Kittles' },
      ],
    ],
  },
  shuffle: {
    minimal: [
      actualArr => {
        const expectedSet = new Set('abc')
        const actualSet = new Set(actualArr)
        return deepEql(actualSet, expectedSet)
      },
    ],
    turns: [
      actualArr => {
        const expectedSet = new Set(['grace', 'sam', 'jen'])
        const actualSet = new Set(actualArr)
        return deepEql(actualSet, expectedSet)
      },
    ],
  },
  split: {
    minimal: [
      ['a', 'b', 'c'],
      ['555', '123', '4567'],
      ['555', '123', '4567'],
    ],
    csv: [
      [
        ['day', 'high', 'low'],
        ['monday', '86', '74'],
        ['tuesday', '84', '73'],
        ['wednesday', '89', '75'],
      ],
    ],
  },
  splitEvery: {
    minimal: [['ab', 'c'], [['a', 'b'], ['c']], [''], [[]]],
    groups: [
      actualGroups => {
        const expectedNames = new Set(['mike', 'luke', 'emma', 'meg', 'tom'])
        if (
          actualGroups.length !== 2 &&
          actualGroups[0].length !== 3 &&
          actualGroups[1].length !== 2
        )
          return false

        for (let i = 0; i < 3; i += 1) {
          const name = actualGroups[0][i]
          if (!expectedNames.has(name)) return false
          expectedNames.delete(name)
        }
        for (let i = 0; i < 2; i += 1) {
          const name = actualGroups[1][i]
          if (!expectedNames.has(name)) return false
          expectedNames.delete(name)
        }

        return true
      },
    ],
  },
  startsWith: {
    minimal: [true, false],
    notebook: [['A', 'C']],
  },
  strictEquals: {
    minimal: [true, false, true, false],
    rivals: [['2025 03 17', '2025 03 23']],
  },
  subtract: {
    minimal: [2],
    attack: [
      {
        type: 'zombie',
        health: 10,
      },
    ],
  },
  sumValues: {
    minimal: [4],
    subtotal: [25.5],
  },
  swapFirstTwoArgs: {
    minimal: {
      js: [['b', 'a', 'c']],
      ts: [['a', 1, true]],
    },
    lower: [
      {
        emma: ['The Very Hungry Caterpillar'],
        meg: ['The Hobbit'],
      },
    ],
  },
}
