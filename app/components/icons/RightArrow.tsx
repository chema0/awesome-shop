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
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 1c-6.071 0-11 4.929-11 11s4.929 11 11 11 11-4.929 11-11-4.929-11-11-11zm4.828 11.5l-4.608 3.763.679.737 6.101-5-6.112-5-.666.753 4.604 3.747h-11.826v1h11.828z" />
      </svg>
    </svg>
  )
);

RightArrow.displayName = "RightArrow";
export default RightArrow;
