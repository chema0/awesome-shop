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
        h: "100vh",
        maxW: "100%",
        d: "flex",
        fd: "column",
        jc: "space-between",
      }}
    >
      <Navbar />
      <Box
        css={{
          flex: 1,
          "@smMin": {
            p: "2rem 6rem",
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
