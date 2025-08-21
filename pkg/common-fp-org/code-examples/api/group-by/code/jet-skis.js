const jetSkis = [
  {
    brand: 'WaveRunner',
    mph: 45,
  },
  {
    brand: 'Sea-Doo',
    mph: 50,
  },
  {
    brand: 'Jet Ski',
    mph: 55,
  },
]

const getRecommendedExperience = jetSki => {
  return jetSki.mph < 50 ? 'beginner' : 'proficient'
}
const groupByExperience = groupBy(getRecommendedExperience)
const jetSkisByExperience = groupByExperience(jetSkis)
console.log(jetSkisByExperience)
/// is {
///   beginner: [
///     { brand: 'WaveRunner', mph: 45 }
///   ],
///   proficient: [
///     { brand: 'Sea-Doo', mph: 50 }
///     { brand: 'Jet Ski', mph: 55 }
///   ],
/// }
