import { ReactElement } from "react";
import { Box } from "../elements";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

type CenteredLayoutProps = {
  children: ReactElement;
};

const CenteredLayout = ({ children }: CenteredLayoutProps) => {
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
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
      <Footer />
    </Box>
  );
};

export default CenteredLayout;
