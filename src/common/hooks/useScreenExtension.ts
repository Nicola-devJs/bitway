import { useLayoutEffect, useState } from "react";

export const useScreenExtension = (screenExtension: number, inversion: boolean = false) => {
  const [isTargetExtension, setTargetExtension] = useState(false);
  useLayoutEffect(() => {
    const handleResize = () => {
      setTargetExtension(inversion ? globalThis.innerWidth < screenExtension : globalThis.innerWidth > screenExtension);
    };
    handleResize();
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return isTargetExtension;
};
