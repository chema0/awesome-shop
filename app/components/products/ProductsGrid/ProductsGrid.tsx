import { Button, Grid, Spacer } from "@nextui-org/react";
import { useProducts } from "hooks";
import { FC, useState } from "react";
import { formatNumber } from "utils/currency";
import { Box, LoadingProgress, LoadingProgressProps } from "components";
import ProductCard from "../ProductCard";

type ProductsGridProps = {
  limit: number;
  enablePagination?: boolean;
  LoadingProgressProps?: LoadingProgressProps;
};

const ProductsGrid: FC<ProductsGridProps> = ({
  limit,
  enablePagination,
  LoadingProgressProps,
}) => {
  const [currentPage, setCurrentPage] = useState<
    | {
        prevPage?: string;
      }
    | {
        nextPage?: string;
      }
  >();

  const {
    data: products,
    isLoading,
    isError,
  } = useProducts({
    params: {
      pageSize: limit,
      ...currentPage,
    },
  });

  const { data, meta } = products ?? { data: [], meta: null };

  const handlePageChange = (type: "prev" | "next") => {
    if (type === "prev") {
      setCurrentPage({
        prevPage: meta?.prev_page,
      });
      return;
    }

    setCurrentPage({
      nextPage: meta?.next_page,
    });
  };

  if (isLoading || !data) {
    return <LoadingProgress {...LoadingProgressProps} />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Grid.Container gap={2} justify="center">
        {data.map((p) => (
          <Grid xs={12} sm={6} md={6} lg={4} key={p.id}>
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

      {enablePagination && (
        <>
          <Spacer y={1} />

          <Box css={{ d: "flex", gap: "0.5rem", jc: "center" }}>
            <Button
              size="sm"
              color="primary"
              disabled={!meta?.prev_page}
              onClick={() => handlePageChange("prev")}
            >
              Prev
            </Button>
            <Button
              size="sm"
              color="primary"
              disabled={!meta?.next_page}
              onClick={() => handlePageChange("next")}
            >
              Next
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default ProductsGrid;
