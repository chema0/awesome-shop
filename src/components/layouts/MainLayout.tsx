import { Col, Container, Row, Link } from "@nextui-org/react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import { AccountButton } from "@/features/users/components";

import { Logo } from "../header/logo";
import { ThemeToggle } from "../header/theme-toogle";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

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
            <Link href="#" color="text" onClick={() => navigate("/")}>
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
            <AccountButton />
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
          minHeight: "100%",
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
