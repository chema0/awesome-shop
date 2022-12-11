import fetcher from "lib/fetcher";
import useSWR, { SWRConfiguration } from "swr";

const defaultOptions = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
} as SWRConfiguration;

const useFetch = <T,>(
  key: string,
  options?: SWRConfiguration,
  fetcherInit?: RequestInit
) => {
  const { data, error, ...rest } = useSWR<T>(
    key,
    (url) => fetcher(url, fetcherInit),
    {
      ...defaultOptions,
      ...options,
    }
  );
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    error: error,
    ...rest,
  };
};

export default useFetch;
