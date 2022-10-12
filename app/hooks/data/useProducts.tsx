import useFetch from "hooks/useFetch";
import { Product } from "types";

const useProducts = () => useFetch<Product[]>("/products");

export default useProducts;
