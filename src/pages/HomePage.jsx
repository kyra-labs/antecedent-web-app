import { DigestDetail } from "../components/digest/DigestDetail";
import { useDigest } from "../hooks/useDigest";
import { BlockLoader } from "../components/common/BlockLoader";
import { ErrorState } from "../components/common/ErrorState";
import { EmptyState } from "../components/common/EmptyState";

export function HomePage() {
  const { data, error, isLoading, refetch } = useDigest();

  let content;

  if (isLoading) content = <BlockLoader page />;
  else if (error) content = <ErrorState onRetry={refetch} />;
  else if (!data) content = <EmptyState />;
  else content = <DigestDetail digest={data} />;

  return content;
}
