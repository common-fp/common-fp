// assume today is 2025 1 15
const cutoffDate = new Date('2000 1 16')

type Applicant = { dateOfBirth: Date }
type Applicants = Record<string, Applicant>
const applicants: Applicants = {
  kim: {
    dateOfBirth: new Date('2002 6 8'),
  },
  grace: {
    dateOfBirth: new Date('1999 12 15'),
  },
}

const canRent = compose([get('dateOfBirth')<Applicant>, isBefore(cutoffDate)])
const keepValid = keepWhen(canRent)<Applicants>
const validApplicants = keepValid(applicants)

console.log(validApplicants)
/// is {
///   grace: {
///     dateOfBirth: 1999 12 15
///   }
/// }
