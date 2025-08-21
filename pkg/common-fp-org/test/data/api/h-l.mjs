import dedent from 'dedent'

export default {
  invert: {
    minimal: [
      { 1: 'a', 2: 'b' },
      new Map([
        [1, 'a'],
        [2, 'b'],
      ]),
    ],
    stocks: [
      dedent(`
        Company Stock Prices
          Apple - $200
          NVIDIA - $150
      `),
      200,
    ],
  },
  invokeWith: {
    minimal: ['Oh hi Mark'],
    animals: [
      {
        animal: 'Flamingo',
        isMammal: false,
        height: `3'9"`,
      },
    ],
  },
  isAfter: {
    minimal: [true, false],
    fridge: [
      {
        eggs: {
          goodUntil: new Date('2025 1 16'),
        },
      },
    ],
  },
  isAtOrAfter: {
    minimal: [true, false, true],
    warranty: [
      [
        {
          name: 'Samsung Galaxy',
          purchaseDate: new Date('2024 6 11'),
        },
      ],
    ],
  },
  isAtOrBefore: {
    minimal: [true, false, true],
    emailArchive: [
      [
        {
          subject: 'Policy renewal',
          received: new Date('2024 1 15'),
        },
      ],
    ],
  },
  isBefore: {
    minimal: [true, false],
    carRental: [
      {
        grace: {
          dateOfBirth: new Date('1999 12 15'),
        },
      },
    ],
  },
  isEmpty: {
    minimal: [true, false, true, false],
    appointments: [
      dedent(`
        Monday: None

        Tuesday:
          At: 8am-9:30
          With: Baz's Baby Furniture

          At: 11am-12
          With: University Of Florida
      `),
    ],
  },
  isFalsey: {
    minimal: [true, true, true, false, false],
    applicants: [
      {
        chris: ['yearsExperience'],
        liz: ['applied'],
      },
    ],
  },
  isLaden: {
    minimal: [true, false, true, false],
    appointments: [
      dedent(`
        Tuesday:
          At: 8am-9:30
          With: Baz's Baby Furniture

          At: 11am-12
          With: University Of Florida

        Friday:
          At: 9am-10
          With: RVs R Us
      `),
    ],
  },
  isTruthy: {
    minimal: [true, true, false, false, false],
    applicants: [
      {
        chris: {
          applied: '2025 02 15',
        },
        liz: {
          yearsExperience: '2',
        },
      },
    ],
  },
  joinValues: {
    minimal: ['A, B', 'A, B'],
    chat: ['Jen, Mike'],
  },
  keep: {
    minimal: [[1, 2, 1]],
    volunteers: [['jason', 'kim', 'sam']],
  },
  keepFirst: {
    minimal: [['a', 'b', 'c'], 'abc', ['a']],
    boots: ['Columbia Escape, Keen Gibson, Timberland Classic'],
  },
  keepFirstWhile: {
    minimal: [[1, 2], []],
    oneHundredMeter: [['emma', 'luke']],
  },
  keepLast: {
    minimal: [['b', 'c', 'd'], 'bcd', ['a']],
    relegated: [['Ipswich Town', 'Leicester City', 'Southampton']],
  },
  keepLastWhile: {
    minimal: [[2, 3], []],
    shows: [["Greg's Grills", "Let's Brunch"]],
  },
  keepRange: {
    minimal: [['b', 'c'], 'bc', ['b']],
    freeThrows: [5.3],
  },
  keepWhen: {
    minimal: [[3, 4], { c: 3, d: 4 }],
    oneHundredMeter: [['mary', 'sarah']],
  },
  last: {
    minimal: ['c', 'c', undefined],
    checkout: ['luke'],
  },
  lessThan: {
    minimal: [true, false],
    scooters: [['s52', 's67']],
  },
  lessThanOrEqualTo: {
    minimal: [true, false],
    restaurants: [['Pizza Johns', 'Salads Galore']],
  },
}
