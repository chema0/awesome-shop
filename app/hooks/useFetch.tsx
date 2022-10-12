import fetcher from "lib/fetcher";
import useSWR, { SWRConfiguration } from "swr";

const defaultOptions = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
} as SWRConfiguration;

const useFetch = <T,>(key: string, options?: SWRConfiguration) => {
  const { data, error } = useSWR<T>(key, fetcher, {
    ...defaultOptions,
    ...options,
  });
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    error: error,
  };
};

export default useFetch;
