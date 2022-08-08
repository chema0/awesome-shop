import { Container, Image, Spacer, Text } from "@nextui-org/react";

import Clothes from "@/assets/clothes.jpg";

export const Landing = () => {
  return (
    <Container
      responsive
      display="flex"
      justify="center"
      alignItems="flex-start"
      css={{ pt: "5rem" }}
    >
      <div>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Discover the best trends,
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
          Create your own style choosing among a huge variaty of clothes, shoes
          and much more. Items of your favourites brands.
        </Text>

        <Text h2 weight="bold">
          Let's do it better, tell us your tastes and
        </Text>

        <Text
          h2
          css={{
            textGradient: "45deg, $blue500 -20%, $green400 100%",
          }}
          weight="bold"
        >
          let us do it for you
        </Text>
      </div>

      <Image
        src={Clothes}
        alt="Clothes photo"
        width={600}
        css={{ borderRadius: "$base" }}
      />
    </Container>
  );
};
