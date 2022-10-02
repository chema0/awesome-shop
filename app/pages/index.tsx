import type { ReactElement } from "react";
import { MainLayout } from "@/components/layouts";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
