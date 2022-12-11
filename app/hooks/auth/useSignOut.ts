import useFetch from "hooks/useFetch";
import { signOut } from "next-auth/react";
import { useCallback } from "react";

const useSignOut = () => {
  const { mutate } = useFetch<void>("/session", undefined, {
    method: "DELETE",
  });

  const clearSession = useCallback(() => {
    signOut({
      callbackUrl: "/",
    });
    mutate();
  }, [mutate]);

  return { clearSession };
};

export default useSignOut;
