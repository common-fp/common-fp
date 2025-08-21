type Applicant = {
  yearsExperience?: string
  applied?: string
}
type Applicants = Record<string, Applicant>
const applicants: Applicants = {
  chris: {
    yearsExperience: undefined,
    applied: '2025 02 15',
  },
  liz: {
    yearsExperience: '2',
    applied: '',
  },
}

const keepTruthyFields = keepWhen(isTruthy)<Applicant>
const cleanApplicants = mapValues(keepTruthyFields)<Applicants>
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
