import { ReactElement } from "react";
import { Box } from "../box";
import { Navbar } from "./navbar";

type MainLayoutProps = {
  children: ReactElement;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      css={{
        maxW: "100%",
      }}
    >
      <Navbar />
      <main style={{ padding: "2rem 6rem" }}>{children}</main>
      {/* <Footer /> */}
    </Box>
  );
};

export { MainLayout };
