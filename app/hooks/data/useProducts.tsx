import useFetch from "hooks/useFetch";
import { Product } from "types";

type UseProductProps = {
  params?: {
    limit?: number;
  };
};

const useProducts = ({ params }: UseProductProps) => {
  let url = "/products";

  if (params?.limit) {
    url += `?limit=${params.limit}`;
  }

  return useFetch<Product[]>(url);
};

export default useProducts;
