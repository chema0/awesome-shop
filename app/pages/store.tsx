import type { ReactElement } from "react";
import { MainLayout } from "@/components/layouts";
import type { NextPageWithLayout } from "./_app";
import ProductsGrid from "@/components/products/ProductsGrid";

const Page: NextPageWithLayout = () => {
  return <ProductsGrid />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
