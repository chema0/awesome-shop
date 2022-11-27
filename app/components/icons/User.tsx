import * as React from "react";

import { IconProps } from ".";

const User: React.FC<IconProps> = React.forwardRef(
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
        <g
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        >
          <path
            data-name="Stroke 1"
            d="M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z"
          />
          <path
            data-name="Stroke 3"
            d="M11.837 11.174a4.372 4.372 0 10-.031 0z"
          />
        </g>{" "}
      </svg>
    </svg>
  )
);

User.displayName = "User";
export default User;
