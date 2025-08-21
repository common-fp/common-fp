import { useMemo } from 'react'

import './simple-table.scss'

const SimpleTable = ({ data, headers }) => {
  const headerList = useMemo(
    () => headers.map(h => <th key={h}>{h}</th>),
    [headers]
  )
  const bodyList = useMemo(
    () =>
      data.map((row, rowIdx) => {
        const tdList = row.map((cell, cellIdx) => <td key={cellIdx}>{cell}</td>)
        return <tr key={rowIdx}>{tdList}</tr>
      }),
    [data]
  )

  return (
    <table className="simple-table">
      <thead>
        <tr>{headerList}</tr>
      </thead>
      <tbody>{bodyList}</tbody>
    </table>
  )
}

export default SimpleTable
