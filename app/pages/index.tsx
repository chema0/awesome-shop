import type { ReactElement } from "react";
import { MainLayout } from "@/components/layouts";
import type { NextPageWithLayout } from "./_app";
import { Container, Row, Text, Spacer } from "@nextui-org/react";
import ProductsGrid from "@/components/products/ProductsGrid";
import { Box, Header } from "../components";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Container responsive css={{ pt: "2rem", pb: "5rem" }}>
        <Row gap={1} css={{ d: "flex", gap: "$6", jc: "center" }}>
          <Text h1 size={60} weight="bold">
            Welcome to
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Awesome Shop.
          </Text>
        </Row>
        <Row css={{ d: "flex", gap: "$6", jc: "center" }}>
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
        </Row>

        <Spacer y={3} />

        <Row>
          <Header>
            <Box css={{ d: "flex", gap: "$4", ai: "baseline" }}>
              <Text size={26} weight="bold">
                Featured
              </Text>
              <Text
                h1
                size={26}
                css={{
                  color: "$blue700",
                }}
                weight="bold"
              >
                products
              </Text>
            </Box>
          </Header>
        </Row>

        <Spacer />

        <Row>
          <ProductsGrid limit={4} />
        </Row>

        <Spacer y={2} />

        <Row>
          <Header>
            <Box css={{ d: "flex", gap: "$4", ai: "baseline" }}>
              <Text size={26} weight="bold">
                New
              </Text>
              <Text
                h1
                size={26}
                css={{
                  color: "$green700",
                }}
                weight="bold"
              >
                items
              </Text>
            </Box>
          </Header>
        </Row>

        <Spacer />

        <Row>
          <ProductsGrid limit={4} />
        </Row>
      </Container>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
