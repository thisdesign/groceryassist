const PinIcon: React.FC<{ className?: string }> = ({ className, ...props }) => (
  <svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1">
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      className={className}
      {...props}
    >
      <g id="Filter-bar" transform="translate(-27.000000, -25.000000)">
        <rect
          id="Rectangle"
          stroke="#D7D7D7"
          x="16.5"
          y="14.5"
          width="342"
          height="34"
          rx="4"
        />
        <g id="Group" transform="translate(27.000000, 25.000000)">
          <path
            d="M8.536,4.269 C8.536,7.461 4.268,12.07 4.268,12.07 C4.268,12.07 2.93098879e-14,7.34 2.93098879e-14,4.269 C2.93098879e-14,1.912 1.911,2.48689958e-14 4.268,2.48689958e-14 C6.625,2.48689958e-14 8.536,1.912 8.536,4.269"
            id="Fill-1"
            fill="#8F9398"
          />
          <path
            d="M5.9979,4.269 C5.9979,5.224 5.2239,5.999 4.2679,5.999 C3.3119,5.999 2.5379,5.224 2.5379,4.269 C2.5379,3.313 3.3119,2.539 4.2679,2.539 C5.2239,2.539 5.9979,3.313 5.9979,4.269"
            id="Fill-4"
            fill="#FEFEFE"
          />
        </g>
      </g>
    </g>
  </svg>
)

export default PinIcon
