import cn from 'classnames'

import './loading-icon.scss'

const LoadingIcon = ({ active = true, className, ...restProps }) => {
  return (
    <svg
      className={cn('loading-icon', className, { active })}
      viewBox="0 0 155 155"
      {...restProps}
    >
      <radialGradient
        id="a"
        cx={123.8}
        cy={77.371}
        r={74.915}
        gradientTransform="matrix(1.0158 0 0 .98445 -22.5 -22.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--accent)" stopOpacity={0} offset={0.6} />
        <stop stopColor="var(--accent)" stopOpacity={0.3} offset={0.7} />
        <stop stopColor="var(--accent)" stopOpacity={0.6} offset={0.8} />
        <stop stopColor="var(--accent)" stopOpacity={0.9} offset={0.9} />
        <stop stopColor="var(--accent)" offset={1} />
      </radialGradient>
      <circle
        cx={77.5}
        cy={77.5}
        r={70}
        fill="none"
        stroke="url(#a)"
        strokeDasharray="200, 1000"
        strokeLinecap="round"
        strokeWidth={15}
      />
      <circle
        cx={77.5}
        cy={77.5}
        r={70}
        fill="none"
        opacity={0.2}
        stroke="var(--accent)"
        strokeLinecap="round"
        strokeWidth={15}
      />
    </svg>
  )
}

export default LoadingIcon
