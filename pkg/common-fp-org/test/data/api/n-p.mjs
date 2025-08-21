import dedent from 'dedent'
import { isOneOf, matchesRegex, re } from './utils.mjs'

export default {
  negate: {
    minimal: [false, true],
    chat: [
      [
        {
          email: 'matt@example.com',
          status: 'away',
          tooltip: 'cannot message this user',
        },
        {
          email: 'jason@example.com',
          status: 'active',
        },
      ],
    ],
  },
  numberIsBetween: {
    minimal: [true, true, false],
    movies: [
      {
        amy: {
          age: 19,
          getsTeenDiscount: true,
        },
        kim: {
          age: 13,
          getsTeenDiscount: true,
        },
        grace: {
          age: 20,
          getsTeenDiscount: false,
        },
      },
    ],
  },
  omit: {
    minimal: [{ b: 2, d: 4 }],
    employees: [
      {
        matt: {
          email: 'matt@example.com',
          startDate: '2024 10 05',
        },
        kim: {
          email: 'kim@example.com',
          startDate: '2024 07 19',
        },
      },
    ],
  },
  order: {
    minimal: [[1, 2, 3]],
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
  pAll: {
    minimal: [false, true, false, true],
    discount: [true],
    series: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pAny: {
    minimal: [false, true, false, true],
    deal: ['shouldShowDeal: ' + true],
    series: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pCompose: {
    minimal: ['answer: 4', 'a'],
    total: [
      {
        cart: ['broom', 'mop', 'detergent'],
        destination: 'cleveland',
        subtotal: 26,
        shipping: 10,
        salesTax: 0.08,
        total: 38.08,
      },
    ],
  },
  pDiscardWhen: {
    minimal: [[1, 2], { a: 1, b: 2 }],
    shipping: [['broom', 'mop']],
    concurrent: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pFind: {
    minimal: [3, undefined],
    code: [`code 'soft' applied because you bought detergent`],
    series: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pForEach: {
    minimal: ['n: 1', 'n: 2', 'n: 3'],
    track: [
      `item 'broom' is in luke's cart`,
      `item 'mop' is in luke's cart`,
      `item 'detergent' is in luke's cart`,
    ],
    concurrent: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pKeepWhen: {
    minimal: [[4, 3], { d: 4, c: 3 }],
    rewards: [
      [
        {
          name: 'detergent',
          cost: 13,
        },
      ],
    ],
    concurrent: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pMapValues: {
    minimal: [[2, 3, 4]],
    shipping: [
      [
        {
          item: 'broom',
          destination: 'cleveland',
          shipping: '2 days',
        },
        {
          item: 'mop',
          destination: 'cleveland',
          shipping: '5 days',
        },
        {
          item: 'detergent',
          destination: 'cleveland',
          shipping: '1 day',
        },
      ],
    ],
    concurrent: [
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.msPassedForN),
      matchesRegex(re.totalMsPassed),
    ],
  },
  pPassThrough: {
    minimal: ['answer: 4', 1],
    total: [
      {
        cart: ['broom', 'mop', 'detergent'],
        destination: 'cleveland',
        subtotal: 26,
        shipping: 10,
        salesTax: 0.08,
        total: 38.08,
      },
    ],
  },
  pResolveValues: {
    minimal: [{ a: 'a', b: 'b' }, ['a', 'b']],
    prep: [
      {
        cart: ['broom', 'mop', 'detergent'],
        destination: 'cleveland',
        shipping: 10,
        salesTax: 0.08,
      },
    ],
  },
  passThrough: {
    minimal: ['answer: 4', 'a'],
    weather: [49.6],
  },
  peek: {
    minimal: ['n: 2', 'answer: 4'],
    debug: [
      [12, 4],
      12,
      [10, 5],
      10,
      {
        emma: 12.6,
        meg: 10.5,
      },
    ],
  },
  pick: {
    minimal: [{ a: 1, c: 3 }],
    featured: [
      {
        'chicken wings': {
          price: 16,
          description: 'One pound tossed in sauce',
        },
        'blt wrap': {
          price: 14,
          description: 'The classic with bacon jam and lemon aioli',
        },
      },
    ],
  },
  prepend: {
    minimal: ['abcd'],
    files: [
      [
        '/home/ken/projects/my-website/index.html',
        '/home/ken/projects/my-website/styles.css',
        '/home/ken/projects/my-website/scripts.js',
      ],
    ],
  },
  prependAll: {
    minimal: [
      [1, 2, 3, 4],
      [1, [2], 3, 4],
    ],
    music: [
      [
        'Superstition',
        'Once in a Lifetime',
        'Like a Rolling Stone',
        'Smells Like Teen Spirit',
      ],
    ],
  },
  prependOne: {
    minimal: [
      ['a', 'b', 'c'],
      [['a'], 'b', 'c'],
    ],
    cook: [
      [
        ['chicken wrap', 'cheese curds'],
        ['burger', 'fries'],
        ['chicken wings', 'salad'],
        ['soup'],
      ],
    ],
  },
  prune: {
    minimal: ['abc'],
    promo: [
      dedent(`
        The Avett Brothers are playing tonight! Come see them
        live at Red Rocks.

        The first caller who names the lead singer's debut
        solo album gets 2 free tickets.
      `),
    ],
  },
  pruneEnd: {
    minimal: ['--abc'],
    links: [
      [
        'More Info On Added Sugars',
        'Nutrition Facts Label Resources',
        'Explore The Percent Daily Value',
      ],
    ],
  },
  pruneStart: {
    minimal: ['abc--'],
    prices: [22.99],
  },
  pWaitMs: {
    minimal: [matchesRegex(/^\d\d$/)],
    timeout: [isOneOf([true, 'call took longer than 50ms'])],
  },
}
