const registrationStart = new Date('2025-04-09')
const expiration = new Date('2025-05-09')

const isRegistrationActive = dateIsBetween(registrationStart, expiration, {
  exclusiveMax: true,
})

isRegistrationActive(registrationStart) // is true
isRegistrationActive(expiration) // is false
