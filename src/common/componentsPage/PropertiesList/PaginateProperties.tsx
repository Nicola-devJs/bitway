"use client";
import { $acivePage, changeActivePage } from "@/app/properties/modules/model";
import { PaginateApp } from "@/common/UI/paginate/PaginateApp";
import { IPropertyCard } from "@/common/interfaces/IProperty";
import { useUnit } from "effector-react";
import React, { FC } from "react";
interface IProps {
  properties: IPropertyCard[];
}

export const PaginateProperties: FC<IProps> = ({ properties }) => {
  const [activePage, setActivePage] = useUnit([$acivePage, changeActivePage]);

  const changeActivePageHandler = (page: number) => {
    setActivePage(page);
  };

  return (
    <PaginateApp
      itemsLenght={properties.length}
      viewCountItems={4}
      activeIdPage={activePage}
      changeIdPage={changeActivePageHandler}
    />
  );
};
