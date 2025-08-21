import dedent from 'dedent'
import { isErrorWithMessage, throwsErrorWithMessage } from './utils.mjs'

export default {
  transpose: {
    minimal: [
      [
        ['region', 'quarter 1', 'quarter 2'],
        ['europe', '52,000', '58,000'],
        ['america', '113,000', '127,000'],
      ],
    ],
    forecast: [
      dedent(`
        Three Day Forecast
        Mon
          high: 68
          low: 55
        Tue
          high: 65
          low: 54
        Wed
          high: 61
          low: 50
      `),
    ],
    differentLengths: [
      isErrorWithMessage(
        "transpose requires 'anArray' to contain arrays of equal length"
      ),
    ],
  },
  truncateToNChars: {
    minimal: ['12345', '12...'],
    notification: ["Hi, my name is Liz Brown from Volley Fun.  We'r..."],
  },
  truncateToNLines: {
    minimal: [' a\n b\n c', ' a\n b\n c\n...'],
    trim: [
      dedent(`
        Error: unable to connect to database
          at connectToDb (file:///app/db/connect.mjs:25:9)
          at queryDatabase (file:///app/db/query.mjs:21:3)
          at getCarsByModel (file:///app/api/cars.mjs:15:10)
          at Layer.handle [as handle_request] (/app/node_modules/express/lib/router/layer.js:95:5)
        ...
      `),
    ],
  },
  update: {
    minimal: [
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
          "update requires argument 'collection' to be an array since you passed an array for 'mapperFns'"
        ),
      ],
      ts: [
        [2, 4, 3],
        throwsErrorWithMessage(
          "update requires argument 'collection' to be an array since you passed an array for 'mapperFns'"
        ),
      ],
    },
  },
  withDatesAscending: {
    minimal: [
      [new Date('2025 03 14'), new Date('2025 03 15'), new Date('2025 03 16')],
    ],
    comments: [
      [
        {
          text: 'Looks like a fun time by the lake',
          upvotes: 5,
          posted: new Date('2025 03 15'),
        },
        {
          text: ':)',
          upvotes: 2,
          posted: new Date('2025 03 16'),
        },
        {
          text: 'Wish I was there!',
          upvotes: 8,
          posted: new Date('2025 03 17'),
        },
      ],
    ],
  },
  withDatesDescending: {
    minimal: [
      [new Date('2025 03 16'), new Date('2025 03 15'), new Date('2025 03 14')],
    ],
    comments: [
      [
        {
          text: 'Wish I was there!',
          upvotes: 8,
          posted: new Date('2025 03 17'),
        },
        {
          text: ':)',
          upvotes: 2,
          posted: new Date('2025 03 16'),
        },
        {
          text: 'Looks like a fun time by the lake',
          upvotes: 5,
          posted: new Date('2025 03 15'),
        },
      ],
    ],
  },
  withNumbersAscending: {
    minimal: [[1, 2, 3]],
    baseball: [
      [
        {
          name: 'Cal Raleigh',
          homeRuns: 41,
          strikeouts: 116,
        },
        {
          name: 'Aaron Judge',
          homeRuns: 37,
          strikeouts: 120,
        },
        {
          name: 'Shohei Ohtani',
          homeRuns: 38,
          strikeouts: 125,
        },
      ],
    ],
  },
  withNumbersDescending: {
    minimal: [[3, 2, 1]],
    baseball: [
      [
        {
          name: 'Cal Raleigh',
          homeRuns: 41,
          strikeouts: 116,
        },
        {
          name: 'Shohei Ohtani',
          homeRuns: 38,
          strikeouts: 125,
        },
        {
          name: 'Aaron Judge',
          homeRuns: 37,
          strikeouts: 120,
        },
      ],
    ],
  },
  withStringsAscending: {
    minimal: [['a', 'b', 'c']],
    photos: [
      [
        'chris - soccer.jpg',
        'chris - with the cats.jpg',
        'ken - garden.jpg',
        'tom - camping.jpg',
        'tom - chillin.jpg',
      ],
    ],
  },
  withStringsDescending: {
    minimal: [['c', 'b', 'a']],
    photos: [
      [
        'tom - chillin.jpg',
        'tom - camping.jpg',
        'ken - garden.jpg',
        'chris - with the cats.jpg',
        'chris - soccer.jpg',
      ],
    ],
  },
}
