import { compose, get, isBefore, keepWhen } from 'common-fp'

// assume today is 2025 1 15
const cutoffDate = new Date('2000 1 16')

const applicants = {
  kim: {
    dateOfBirth: new Date('2002 6 8'),
  },
  grace: {
    dateOfBirth: new Date('1999 12 15'),
  },
}

const canRent = compose([get('dateOfBirth'), isBefore(cutoffDate)])
const keepValid = keepWhen(canRent)
const validApplicants = keepValid(applicants)

show(validApplicants)
