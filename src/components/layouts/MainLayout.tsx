import { Col, Container, Row, Text, Link, useTheme } from "@nextui-org/react";
import * as React from "react";

import { Logo } from "../elements/logo";
import { ThemeToggle } from "../elements/theme-toogle";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <Container
        lg={true}
        as="nav"
        display="flex"
        wrap="nowrap"
        alignItems="center"
        css={{ mt: "1rem" }}
      >
        <Row justify="space-between" align="baseline">
          <Col>
            <Link href="/" color="text">
              <Logo />
            </Link>
          </Col>
          <Col
            css={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <ThemeToggle />
            <Text h4>
              <Link color="text">Account</Link>
            </Text>
          </Col>
        </Row>
      </Container>

      <Container
        lg={true}
        display="flex"
        as="main"
        alignContent="space-between"
        css={{
          position: "relative",
          minHeight: "100vh",
          "@mdMax": {
            overflowX: "hidden",
          },
        }}
      >
        {children}
        {/* <Footer /> */}
      </Container>
    </>
  );
};
