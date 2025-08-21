import './moon.scss'

const Moon = props => (
  <svg viewBox="0 0 100 100" {...props}>
    <path
      fillRule="evenodd"
      strokeWidth={1.433}
      className="moon"
      d="M49.895 5.314c-11.151 6.3-18.662 18.082-18.662 31.576 0 20.135 16.719 36.46 37.338 36.46 9.788 0 18.705-3.68 25.361-9.699 3.306-2.987 7.09-.807 5.814 2.747C92.772 85.968 73.72 100 51.302 100 22.967 100 0 77.57 0 49.902 0 23.395 21.185 1.617 47.995.017c4.96-.283 6.235 2.846 1.9 5.296z"
      clipRule="evenodd"
    />
  </svg>
)

export default Moon
