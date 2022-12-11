import { Col, Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { RightArrow } from "../icons";
import Box from "./Box";

type HeaderProps = {
  children: ReactElement;
};

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <Container fluid display="flex" justify="space-between" alignItems="center">
      {children}
      <Box css={{cursor: "pointer"}}>
        <Link href="/store" color="text" >
          <RightArrow size={30} />
        </Link>
      </Box>
    </Container>
  );
};

export default Header;
