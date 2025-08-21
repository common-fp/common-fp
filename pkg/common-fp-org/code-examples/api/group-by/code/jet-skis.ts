type JetSki = { brand: string; mph: number }

const jetSkis: JetSki[] = [
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

const getRecommendedExperience = (jetSki: JetSki) => {
  return jetSki.mph < 50 ? 'beginner' : 'proficient'
}
const groupByExperience = groupBy(getRecommendedExperience)<JetSki[]>
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
