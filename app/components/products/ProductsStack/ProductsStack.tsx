import { Button, Grid, Spacer } from "@nextui-org/react";
import { useProducts } from "hooks";
import { useState } from "react";
import { formatNumber } from "utils/currency";
import { Box, LoadingProgress, LoadingProgressProps } from "../..";
import ProductCard from "../ProductCard";

type ProductsStackProps = {
  limit: number;
  LoadingProgressProps?: LoadingProgressProps;
};

const ProductsStack = ({ limit, LoadingProgressProps }: ProductsStackProps) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts({
    params: {
      pageSize: limit,
    },
  });

  const { data, meta } = products ?? { data: [], meta: null };

  if (isLoading || !data) {
    return <LoadingProgress {...LoadingProgressProps} />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Box css={{ d: "flex", gap: "$8", w: "100%" }}>
        {data.map((p) => (
          <ProductCard
            item={{
              id: p.id,
              name: p.name,
              price: formatNumber(p.price),
              img: p.image,
            }}
            key={p.id}
          />
        ))}
      </Box>
    </>
  );
};

export default ProductsStack;
