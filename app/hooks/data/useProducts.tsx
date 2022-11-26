import useFetch from "hooks/useFetch";
import { Meta, Product } from "types";

type UseProductProps = {
  params: {
    pageSize: number;
    prevPage?: string;
    nextPage?: string;
  };
};

// const getKey = (pageToken: string, previousPageData) => {
//   // reached the end
//   if (previousPageData && !previousPageData.data) return null;

//   // first page, we don't have `previousPageData`
//   if (pageIndex === 0) return `/users?limit=10`;

//   // add the cursor to the API endpoint
//   return `/users?cursor=${previousPageData.nextCursor}&limit=10`;
// };

const useProducts = ({ params }: UseProductProps) => {
  let url = "/products?";

  if (params?.pageSize) {
    url += `page_size=${params.pageSize}`;
  }

  if (params.prevPage) {
    url += `&prev_page=${params.prevPage}`;
  } else if (params.nextPage) {
    url += `&next_page=${params.nextPage}`;
  }

  return useFetch<{
    data: Product[];
    meta: Meta;
  }>(url);
};

export default useProducts;
