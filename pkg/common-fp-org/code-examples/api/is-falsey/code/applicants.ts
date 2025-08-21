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

const getMissingFields = compose([keepWhen(isFalsey)<Applicant>, Object.keys])
const getAllMissingFields = mapValues(getMissingFields)<Applicants>
const applicantPrompts = getAllMissingFields(applicants)
console.log(applicantPrompts)
/// is {
///   chris: [yearsExperience]
///   liz: [applied]
/// }
