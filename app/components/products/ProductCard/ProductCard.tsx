import { Card, CardProps, Row, Text } from "@nextui-org/react";
import { FC } from "react";

type ProductCardProps = {
  item: {
    id: number;
    name: string;
    price: string;
    img: string;
  };
} & Partial<CardProps>;

const ProductCard: FC<ProductCardProps> = ({ item, ...props }) => {
  return (
    <Card isPressable {...props}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={item.img}
          objectFit="cover"
          width="100%"
          height={210}
          alt={item.name}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>{item.name}</Text>
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            {item.price}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
