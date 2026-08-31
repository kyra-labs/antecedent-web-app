import { useAsync } from "./useAsync";
import { getDigestArchive } from "../api/queries";

export const useDigestArchive = () => {
  const { data, error, isLoading, refetch } = useAsync(getDigestArchive);

  return { data, error, isLoading, refetch };
};
