"use client";
import React, { createContext, useState } from "react";

interface IContextFilter {
  isShowFilter: boolean;
  hideFilter: () => void;
  showFilter: () => void;
}

export const FilterContext = createContext({} as IContextFilter);

export default function FilterProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  const hideFilter = () => setShow(false);
  const showFilter = () => setShow(true);

  return (
    <FilterContext.Provider value={{ isShowFilter: show, hideFilter, showFilter }}>{children}</FilterContext.Provider>
  );
}
