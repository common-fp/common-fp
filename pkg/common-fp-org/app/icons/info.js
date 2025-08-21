import './info.scss'

const Info = props => (
  <svg
    className="icon icon-info"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={10} stroke="var(--fg)" strokeWidth={1.5} />
    <path
      stroke="var(--fg)"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 17v-6"
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      fill="var(--fg)"
      transform="matrix(1 0 0 -1 11 9)"
    />
  </svg>
)
export default Info
