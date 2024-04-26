import { useLayoutEffect, useState } from "react";

type ParametrsType = { screenExtension: number; maxScreen?: boolean }[];

const showElement = (params: ParametrsType) => {
  return params.map(({ screenExtension, maxScreen }) =>
    maxScreen ? globalThis.innerWidth <= screenExtension : globalThis.innerWidth >= screenExtension
  );
};

export const useScreenExtension = (params: ParametrsType) => {
  const [isTargetExtension, setTargetExtension] = useState(params.map(({ maxScreen }) => !maxScreen));
  useLayoutEffect(() => {
    const handleResize = () => {
      setTargetExtension(showElement(params));
    };
    handleResize();
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return isTargetExtension;
};
