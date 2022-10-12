import * as React from "react";

import { IconProps } from ".";

const RightArrow: React.FC<IconProps> = React.forwardRef(
  ({ fill = "currentColor", filled, size, height, width, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <svg
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
      </svg>
    </svg>
  )
);

RightArrow.displayName = "RightArrow";
export default RightArrow;
