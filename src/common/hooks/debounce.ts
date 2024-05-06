import { useCallback, useRef } from "react";

export const useDebounce = <T>(callback: (...args: T[]) => void, delay = 500): ((...args: T[]) => void) => {
  let timeout: any = null;

  const debounceHandler = useCallback((...args: T[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }, []);

  return debounceHandler;
};
