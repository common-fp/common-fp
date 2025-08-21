const printDesign = {
  matt: { email: 'matt@example.com', startDate: '2024 10 05' },
  jason: { email: 'jason@example.com', startDate: '2023 08 12' },
  amy: { email: 'amy@example.com', startDate: '2023 04 27' },
  kim: { email: 'kim@example.com', startDate: '2024 07 19' },
}

const removeEmployees = omit(['jason', 'amy'])
const updatedPrintDesign = removeEmployees(printDesign)

console.log(updatedPrintDesign)
/// is {
///   matt: {
///     email: matt@example.com
///     startDate: 2024 10 05
///   }
///   kim: {
///     email: kim@example.com
///     startDate: 2024 07 19
///   }
/// }
