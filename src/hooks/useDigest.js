import { useAsync } from "./useAsync";
import { getLatestDigest, getDigestById } from "../api/queries";

export const useDigest = (id = null) => {
  const { data, error, isLoading, refetch } = useAsync(() => {
    return id ? getDigestById(id) : getLatestDigest();
  }, [id]);

  return { data, error, isLoading, refetch };
};
