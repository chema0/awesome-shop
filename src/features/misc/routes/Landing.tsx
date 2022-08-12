import { Col, Container, Image, Row, Spacer, Text } from "@nextui-org/react";

import Clothes from "@/assets/clothes.jpg";

export const Landing = () => {
  return (
    <Container
      responsive
      display="flex"
      justify="center"
      alignItems="flex-start"
      css={{ pt: "5rem", pb: "5rem" }}
    >
      <Row>
        <Col>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Discover trends,
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            break with your outfits
          </Text>

          <Spacer y={1.5} />

          <Text h2 weight="bold">
            Search
          </Text>
          <Spacer y={0.5} />
          <Text h2 weight="bold">
            Choose
          </Text>
          <Spacer y={0.5} />
          <Text h2 weight="bold">
            Buy
          </Text>
        </Col>

        <Col>
          <Image
            src={Clothes}
            alt="Clothes photo"
            width={600}
            css={{ borderRadius: "$base" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
