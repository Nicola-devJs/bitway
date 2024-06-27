import { useState, useCallback } from "react";

interface IReturnCustomQuery<T> {
  isLoading: boolean;
  advancedFetcher: (data: any) => T;
}

export const useCustomQuery = <T>(
  fetcher: (args: any) => Promise<T>
): IReturnCustomQuery<ReturnType<typeof fetcher>> => {
  const [isLoading, setLoading] = useState(false);

  const advancedFetcher = async (data: any) => {
    try {
      setLoading(true);
      return await fetcher(data);
    } catch (error) {
      throw error as T;
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    advancedFetcher,
  };
};
