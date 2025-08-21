type MonthDate = { month: string; date: number }

const today = { month: 'March', date: 2 }

const isBirthday = (bday: MonthDate) =>
  bday.month === today.month && bday.date === today.date

type Birthdays = Record<string, MonthDate>
const customerBirthdays: Birthdays = {
  mary: { month: 'March', date: 2 },
  sarah: { month: 'July', date: 15 },
}

const isAnyonesBday = any(isBirthday)<Birthdays>

const shouldSing = isAnyonesBday(customerBirthdays)
console.log('should sing: ' + shouldSing)
