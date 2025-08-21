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

const getMissingFields = compose([keepWhen(isFalsey), Object.keys])
const getAllMissingFields = mapValues(getMissingFields)
const applicantPrompts = getAllMissingFields(applicants)
console.log(applicantPrompts)
/// is {
///   chris: [yearsExperience]
///   liz: [applied]
/// }
