import './search.scss'

const Search = ({ width = 30, ...restProps }) => {
  return (
    <svg
      className="icon icon-search"
      width={width}
      viewBox="0 0 3 3"
      fill="none"
      {...restProps}
    >
      <path
        d="m2.07 2.072.78.778M2.4 1.275a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0z"
        strokeWidth={0.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Search
