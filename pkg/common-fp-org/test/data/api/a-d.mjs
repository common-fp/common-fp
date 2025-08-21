import dedent from 'dedent'

export default {
  add: {
    minimal: [4],
    heal: [{ health: 7, name: 'meg' }],
  },
  all: {
    minimal: [false, true, false, true],
    party: [['B']],
  },
  alter: {
    minimal: [
      {
        phil: { goals: 1, assists: 0 },
        mary: { goals: 0, assists: 2 },
        sarah: { goals: 2, assists: 1 },
      },
    ],
  },
  any: {
    minimal: [false, true, false, true],
    birthday: ['should sing: true'],
  },
  append: {
    minimal: ['abcd'],
    checklist: [
      dedent.withOptions({ trimWhitespace: false })(`
        Items done
        ----------
        email professor 🗹
        wish mom a happy birthday 🗹
        geology homework 🗹

        Items to do
        -----------
        get cat food ☐
        apply for internship ☐
      `),
    ],
  },
  appendAll: {
    minimal: [
      [1, 2, 3, 4],
      [1, 2, 3, [4]],
    ],
    students: [['amy', 'kim', 'matt', 'jason']],
  },
  appendOne: {
    minimal: [
      [1, 2, 3],
      [1, 2, [3]],
    ],
    cart: [['bananas', 'chicken', 'apple']],
  },
  assignDefaults: {
    minimal: [{ a: 2, b: 2, c: 3 }],
    greet: ['Hello Grace.  How are you?'],
  },
  assignOverrides: {
    minimal: [
      {
        a: 1,
        b: 2,
        c: 3,
      },
    ],
    gifts: [
      {
        teacher: 'apple',
        sam: 'pokemon card',
        jen: 'phone case',
      },
    ],
  },
  compareByPath: {
    minimal: [
      [
        { name: { first: 'emma' } },
        { name: { first: 'luke' } },
        { name: { first: 'mike' } },
      ],
    ],
  },
  compareByProp: {
    minimal: [[{ name: 'emma' }, { name: 'luke' }, { name: 'mike' }]],
  },
  compose: {
    minimal: ['answer: 4', 'a'],
    weather: [49.6],
  },
  containedIn: {
    minimal: [true, false],
    students: [true, false],
  },
  contains: {
    minimal: [true, false, true, false],
    classroom: [false, true],
  },
  dateIsBetween: {
    minimal: [true, false],
    expired: [true, false],
  },
  defaultFalseyValTo: {
    minimal: ['mary', '<no name>', '<no name>'],
    teddy: [
      [
        {
          name: 'Teddy',
          shirt: 'blue',
        },
        {
          name: 'Winnie',
          shirt: 'red',
        },
        {
          name: 'Teddy',
          shirt: 'purple',
        },
      ],
    ],
  },
  defaultNullishValTo: {
    minimal: [1, 0, -1],
    monopoly: [
      {
        sam: 2000,
        jen: 0,
        mike: 1500,
      },
    ],
  },
  discard: {
    minimal: [[3, 4]],
    skittles: [['orange', 'red', 'purple']],
  },
  discardFirst: {
    minimal: [['c', 'd'], 'cd'],
    chess: [
      [
        ['win', 'white'],
        ['draw', 'black'],
      ],
    ],
  },
  discardFirstWhile: {
    minimal: [
      [3, 4],
      [3, 4, 1],
    ],
    scores: [[70, 88, 92]],
  },
  discardLast: {
    minimal: [['a', 'b'], 'ab'],
    dice: [10],
  },
  discardLastWhile: {
    minimal: [
      [1, 2],
      [3, 4, 1],
    ],
    gold: [
      [
        { name: 'meg', gold: 80 },
        { name: 'tom', gold: 120 },
      ],
    ],
  },
  discardRange: {
    minimal: [['a', 'd'], 'ad', ['a']],
    bowling: [
      [
        ['monday', 'thursday', 'friday'],
        [188, 202, 156],
        [172, 190, 185],
        [206, 167, 191],
      ],
    ],
  },
  discardWhen: {
    minimal: [[1, 2], { a: 1, b: 2 }],
    soda: [[12, 11.99, 12.02]],
  },
  divideBy: {
    minimal: [3],
    dinner: [
      {
        pizzaSlices: 3,
        sodas: 1,
        brownies: 2,
      },
    ],
  },
}
