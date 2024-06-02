import { useState, useCallback } from "react";

interface IReturnCustomQuery<T> {
  isLoading: boolean;
  advancedFetcher: (data: any) => T;
}

type AsyncFetcher<T> = T extends (args: any) => Promise<infer R> ? Promise<R> : T;

export const useCustomQuery = <T>(
  fetcher: (args: any) => Promise<any>
): IReturnCustomQuery<ReturnType<typeof fetcher>> => {
  const [isLoading, setLoading] = useState(false);

  const advancedFetcher = async (data: any) => {
    setLoading(true);
    const response = await fetcher(data);
    setLoading(false);
    return response;
  };

  return {
    isLoading,
    advancedFetcher,
  };
};
