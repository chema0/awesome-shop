import type { ReactElement } from "react";
import { MainLayout } from "@/components/layouts";
import type { NextPageWithLayout } from "./_app";
// import Image from "next/image";
// import LandingImage from "public/images/open-shop.jpg";
import { Col, Container, Row, Text, Image } from "@nextui-org/react";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Container responsive css={{ pt: "2rem", pb: "5rem" }}>
        <Row gap={1} align="center">
          <Col>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Welcome to Awesome Shop.
            </Text>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
            >
              Discover & Buy.
            </Text>
          </Col>
          <Col>
            <Image
              src="/images/clothes.jpg"
              alt="Clothes photo"
              width={700}
              css={{ borderRadius: "$base" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
