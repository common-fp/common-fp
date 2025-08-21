const applicants = {
  chris: {
    yearsExperience: undefined,
    applied: '2025 02 15',
  },
  liz: {
    yearsExperience: '2',
    applied: '',
  },
}

const keepTruthyFields = keepWhen(isTruthy)
const cleanApplicants = mapValues(keepTruthyFields)
const updatedApplicants = cleanApplicants(applicants)
console.log(updatedApplicants)
/// is {
///   chris: {
///     applied: 2025 02 15
///   }
///   liz: {
///     yearsExperience: 2
///   }
/// }
