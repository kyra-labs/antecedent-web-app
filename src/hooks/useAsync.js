import { useState, useEffect, useCallback, useRef } from "react";

export const useAsync = (asyncFn, deps = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const requestId = useRef(0);

  const run = useCallback(
    () => {
      const thisRequestId = ++requestId.current;

      setIsLoading(true);
      setError(null);

      asyncFn()
        .then((result) => {
          if (thisRequestId === requestId.current) setData(result);
        })
        .catch((error) => {
          if (thisRequestId === requestId.current) setError(error);
        })
        .finally(() => {
          if (thisRequestId === requestId.current) setIsLoading(false);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );

  useEffect(() => {
    run();
  }, [run]);

  return { data, error, isLoading, refetch: run };
};
