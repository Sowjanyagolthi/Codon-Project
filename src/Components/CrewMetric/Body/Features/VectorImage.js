import * as React from "react"

const VectorImage = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 0v4.8h15.816L0 32.616 3.384 36 31.2 8.184V24H36V0H12Z"
      fill="#C57600"
    />
  </svg>
)

export default VectorImage
