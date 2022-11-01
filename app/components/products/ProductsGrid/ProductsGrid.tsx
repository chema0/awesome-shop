import { Grid } from "@nextui-org/react";
import { useProducts } from "hooks";
import { formatNumber } from "utils/currency";
import ProductCard from "../ProductCard";

type ProductsGridProps = {
  limit?: number;
};

const ProductsGrid = ({ limit }: ProductsGridProps) => {
  const { data, isLoading, isError } = useProducts({
    params: {
      limit,
    },
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Grid.Container gap={2} justify="center">
      {data.map((p) => (
        <Grid xs={12} sm={6} md={6} lg={3} key={p.id}>
          <ProductCard
            item={{
              id: p.id,
              name: p.name,
              price: formatNumber(p.price),
              img: p.image,
            }}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default ProductsGrid;
