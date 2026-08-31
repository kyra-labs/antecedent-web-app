import { useParams } from "react-router";
import { DigestDetail } from "../components/digest/DigestDetail";
import { useDigest } from "../hooks/useDigest";
import { BlockLoader } from "../components/common/BlockLoader";
import { ErrorState } from "../components/common/ErrorState";
import { EmptyState } from "../components/common/EmptyState";

export const DigestArchiveDetailPage = () => {
  const { id } = useParams();

  const { data, error, isLoading, refetch } = useDigest(id);

  let content;

  if (isLoading) content = <BlockLoader />;
  else if (error) content = <ErrorState onRetry={refetch} />;
  else if (!data) content = <EmptyState />;
  else content = <DigestDetail digest={data} />;

  return content;
};
