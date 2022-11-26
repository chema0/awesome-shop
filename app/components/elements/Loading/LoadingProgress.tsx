import { Loading, LoadingProps } from "@nextui-org/react";
import { FC } from "react";
import Box from "../Box";

export type LoadingProgressProps = Partial<LoadingProps>;

const LoadingProgress: FC<LoadingProgressProps> = ({ ...props }) => {
  return (
    <Box css={{ d: "flex", jc: "center", ai: "center", height: "100%" }}>
      <Loading size="xl" {...props} />
    </Box>
  );
};

export default LoadingProgress;
