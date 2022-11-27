import { API_URL } from "config";

const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(API_URL + url, init);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.message = await res.json();
    error.cause = res.status;
    throw error;
  }

  if (!res.body) {
    return Promise.resolve();
  }

  return res.json();
};

export default fetcher;
