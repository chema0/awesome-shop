import * as React from "react";

type CenteredLayoutProps = {
  children: React.ReactNode;
};

const CenteredLayout = ({ children }: CenteredLayoutProps) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      {children}
    </main>
  );
};

export default CenteredLayout;
