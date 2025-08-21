import deepEql from 'deep-eql'
import dedent from 'dedent'
import { isErrorWithMessage, throwsErrorWithMessage } from './utils.mjs'

export default {
  mAppendAll: {
    minimal: [true, ['a', 'b', 'c']],
    junkmail: [
      {
        101: ['water bill', 'pizza coupon', 'housing ad'],
        102: ['birthday card', 'pizza coupon', 'housing ad'],
        103: ['pizza coupon', 'housing ad'],
      },
    ],
  },
  mAppendOne: {
    minimal: [true, ['a', 'b', 'c']],
    superKitty: [
      {
        mike: ['burger', 'fries', 'super kitty'],
        luke: ['chicken sandwich', 'soda', 'super kitty'],
      },
    ],
  },
  mAssignDefaults: {
    minimal: [true, { a: 2, c: 3, b: 2 }],
    dinner: [
      {
        emma: {
          side: 'salad',
          main: 'tofu',
        },
        meg: {
          side: 'salad',
          main: 'chicken',
        },
        tom: {
          side: 'rice',
          main: 'chicken',
        },
      },
    ],
  },
  mAssignOverrides: {
    minimal: [true, { a: 1, c: 3, b: 2 }],
    pirateGuild: [
      {
        hat: 'pirate hat',
        eyewear: 'eye patch',
        pants: 'loin cloth',
      },
    ],
  },
  mDiscardFirst: {
    minimal: [true, [3, 4]],
    logs: [
      [
        ['10:00:05', 'user purchased hat'],
        ['10:00:06', 'purchase passed audit'],
        ['10:00:08', 'error requesting customer data'],
      ],
    ],
  },
  mDiscardFirstWhile: {
    minimal: [true, [3, 4]],
    bots: [[{ name: 'HeadlessNick', humanScore: 20 }]],
  },
  mDiscardLast: {
    minimal: [true, [1, 2]],
    weather: [
      [
        ['2025-04-08', 35, 50],
        ['2025-04-09', 40, 55],
        ['2025-04-10', 38, 52],
      ],
    ],
  },
  mDiscardLastWhile: {
    minimal: [true, [1, 2]],
    accounts: [
      [
        {
          id: 'ken@example.com',
          lastActive: '2024 2 16',
        },
      ],
    ],
  },
  mDiscardRange: {
    minimal: [true, [1, 4]],
    visitors: [202],
  },
  mFillRangeWith: {
    minimal: [true, [1, 0, 0, 4]],
    cans: [[2984, 3012, 0, 0, 0, 3009]],
  },
  mFillWith: {
    minimal: [true, [0, 0, 0]],
    baseball: [
      {
        strikes: 0,
        balls: 0,
        outs: 0,
      },
    ],
  },
  mKeepFirst: {
    minimal: [true, [1, 2]],
    medals: [['jessica', 'elena', 'evy']],
  },
  mKeepFirstWhile: {
    minimal: [true, [1, 2]],
    limo: [['phil', 'mary']],
  },
  mKeepLast: {
    minimal: [true, [3, 4]],
    bookShop: [
      dedent(`
        Sales From Last Two Months
        Mar
          subscriptions: 112
          books:         530
        Apr
          subscriptions: 107
          books:         588
      `),
    ],
  },
  mKeepLastWhile: {
    minimal: [true, [3, 4]],
    games: [['battle sheep', 'mastermind']],
  },
  mKeepRange: {
    minimal: [true, [2, 3]],
    football: [
      dedent(`
        A.J. Brown and DeVonta Smith combined for
          receptions: 19
          yards: 219
      `),
    ],
  },
  mMapValues: {
    minimal: [true, [2, 3, 4]],
    sale: [
      {
        soccerBall: 10.38,
        shinGuards: 7.95,
        cleats: 39.99,
      },
    ],
  },
  mOmit: {
    minimal: [true, { b: 2, d: 4 }],
    employees: [
      {
        matt: { email: 'matt@example.com', startDate: '2024 10 05' },
        kim: { email: 'kim@example.com', startDate: '2024 07 19' },
      },
    ],
  },
  mOrder: {
    minimal: [true, [1, 2, 3]],
    inventory: [
      {
        potions: [
          { name: 'cloak', weight: 8 },
          { name: 'attack up', weight: 6 },
          { name: 'heal', weight: 5 },
        ],
        weapons: [
          { name: 'axe', weight: 30 },
          { name: 'sword', weight: 10 },
          { name: 'wand', weight: 8 },
        ],
      },
    ],
  },
  mPick: {
    minimal: [true, { a: 1, c: 3 }],
    adopt: [
      {
        bella: {
          age: 3,
          notes: 'likes her alone time',
          breed: 'domestic shorthair',
        },
        leo: {
          age: 2,
          notes: 'enjoys food too much',
          breed: 'domestic longhair',
        },
      },
    ],
  },
  mPrependAll: {
    minimal: [true, ['a', 'b', 'c']],
    fastPass: [['mike', 'luke', 'sam', 'jen']],
  },
  mPrependOne: {
    minimal: [true, ['a', 'b', 'c']],
    prep: [
      {
        bacon: [
          'wash hands and put on gloves',
          'ensure it is fully thawed',
          'open bag with scissors',
          'place in cambro diagonally',
          'wrap the cambro with saran wrap and lid',
        ],
        tuna: [
          'wash hands and put on gloves',
          'place dried tuna into bowl',
          'break tuna apart',
          'add half a bag of mayo to bowl',
          'knead mayo into tuna',
        ],
      },
    ],
  },
  mReverse: {
    minimal: [true, ['c', 'b', 'a']],
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
  mSet: {
    minimal: [true, { a: 'c' }],
    leadActors: [
      [
        { name: 'Matthew McConaughey', isLead: true },
        { name: 'Woody Harrelson', isLead: true },
        { name: 'Michelle Monaghan' },
        { name: 'Michael Potts' },
        { name: 'Tory Kittles' },
      ],
    ],
    error: [
      isErrorWithMessage(
        'mSet requires key to be assignable.  See error properties for more info.'
      ),
    ],
  },
  mSetAtPath: {
    minimal: [
      true,
      {
        a: {
          b: 'd',
        },
      },
    ],
    preference: [
      {
        email: 'meg@example.com',
        preferences: {
          mode: 'dark',
        },
      },
    ],
    errors: [
      isErrorWithMessage("mSetAtPath requries 'path' to be a non-empty array"),
      isErrorWithMessage(
        "mSetAtPath requires path to exist on 'anything'.  Arguments are assigned to this error to aid in debugging."
      ),
      isErrorWithMessage(
        'mSetAtPath requires the property at path to be assignable.  See error properties for more info.'
      ),
    ],
  },
  mShuffle: {
    minimal: [
      true,
      vals => {
        const expectedSet = new Set([1, 2, 3])
        const actualSet = new Set(vals)
        return deepEql(actualSet, expectedSet)
      },
    ],
    clue: [
      cards => {
        const expectedSets = {
          rooms: new Set(['ballroom', 'conservatory', 'lounge']),
          suspects: new Set([
            'Colonel Mustard',
            'Miss Scarlet',
            'Professor Plum',
          ]),
          weapons: new Set(['dagger', 'rope', 'wrench']),
        }
        const actualSets = Object.entries(cards).reduce((res, [k, v]) => {
          res[k] = new Set(v)
          return res
        }, {})
        return deepEql(actualSets, expectedSets)
      },
    ],
  },
  mUpdate: {
    minimal: [
      true,
      {
        a: 2,
        b: 2,
        c: 2,
      },
    ],
    gift: [
      {
        name: 'luke',
        books: ['Player Piano', "Cat's Cradle"],
      },
    ],
    notes: {
      js: [
        [2, 4, 3],
        isErrorWithMessage(
          "mUpdate requires argument 'collection' to be an array since you passed an array for 'mapperFns'"
        ),
      ],
      ts: [
        [2, 4, 3],
        throwsErrorWithMessage(
          "mUpdate requires argument 'collection' to be an array since you passed an array for 'mapperFns'"
        ),
      ],
    },
  },
  mapKeys: {
    minimal: [
      {
        'tom@example.com': {
          id: 'j0N7',
          email: 'tom@example.com',
        },
        'ken@example.com': {
          id: 'b5sS',
          email: 'ken@example.com',
        },
        'chris@example.com': {
          id: 'yjdk',
          email: 'chris@example.com',
        },
      },
    ],
  },
  mapValues: {
    minimal: [[2, 3, 4]],
    conference: [['liz', 'phil', 'mary']],
  },
  multiplyBy: {
    minimal: [6],
    dinner: [
      {
        phil: 19.69,
        mary: 18.38,
      },
    ],
  },
}
