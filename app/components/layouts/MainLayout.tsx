import { ReactElement } from "react";
import { Box } from "../elements";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

type MainLayoutProps = {
  children: ReactElement;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box
      css={{
        maxW: "100%",
        d: "flex",
        fd: "column",
        jc: "space-between",
      }}
    >
      <Navbar />
      <main style={{ padding: "2rem 6rem" }}>{children}</main>
      <Footer />
    </Box>
  );
};

export { MainLayout };
