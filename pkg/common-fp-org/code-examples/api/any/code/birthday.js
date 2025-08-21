const today = { month: 'March', date: 2 }

const isBirthday = bday =>
  bday.month === today.month && bday.date === today.date

const customerBirthdays = {
  mary: { month: 'March', date: 2 },
  sarah: { month: 'July', date: 15 },
}

const isAnyonesBday = any(isBirthday)

const shouldSing = isAnyonesBday(customerBirthdays)
console.log('should sing: ' + shouldSing)
