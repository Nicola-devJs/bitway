"use client";
import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { NextImage } from "@/common/components/NextImage";
import { ListProperties, ShowType } from "@/common/components/listProperties/ListProperties";
import listStyleIcon from "@/assets/icons/list-style.svg";
import tileStyleIcon from "@/assets/icons/tile-style.svg";
import { TextApp } from "@/common/styledComponents/Text";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { FilterContext } from "@/common/hoc/FilterProvider";
import { theme } from "@/assets/theme/theme";
import { IResponseProperties } from "@/common/interfaces/property/property";
import { SelectApp } from "@/common/UI/select/SelectApp";

import { PaginateApp } from "@/common/UI/paginate/PaginateApp";
import { HiddenBlock } from "@/common/components/hiddenBlock/HiddenBlock";

// TODO хардкод по сортировке объектов
const sortedOptions = [
  { label: "возрастанию", value: "hight" },
  { label: "убыванию", value: "low" },
];

interface IProps {
  responseProperties: IResponseProperties;
}

export const PropertiesList: FC<IProps> = ({ responseProperties }) => {
  const [showType, setShowType] = useState<ShowType>("tile");
  const [sorted, setSorted] = useState<{ label: string; value: string }>(sortedOptions[0]);
  const { showFilter } = useContext(FilterContext);
  const [page, setPage] = useState(responseProperties.page);

  const changeShowTypeHandler = (type: ShowType) => () => setShowType(type);
  const changeActivePage = (page: number) => setPage(page);

  return (
    <div style={{ width: "100%" }}>
      <PropertiesToolbar>
        <ShowAndCountPropertiesBlock>
          <HiddenBlock mode="min" extension={theme.media.tablet}>
            <ButtonApp width={98} onClick={showFilter}>
              Фильтр
            </ButtonApp>
          </HiddenBlock>

          <HiddenBlock mode="max" extension={theme.media.phone}>
            <NextImage
              info={tileStyleIcon}
              $width={24}
              $height={24}
              objectFit="contain"
              onClick={changeShowTypeHandler("tile")}
            />

            <NextImage
              info={listStyleIcon}
              $width={24}
              $height={24}
              objectFit="contain"
              onClick={changeShowTypeHandler("list")}
            />
            <TextApp>
              Показано {responseProperties.objects.length}–{responseProperties.objects.length} из{" "}
              {responseProperties.objects.length} результатов
            </TextApp>
          </HiddenBlock>
        </ShowAndCountPropertiesBlock>
        <SelectApp.Sorted
          label="Сортировать по"
          options={sortedOptions}
          value={sorted.label}
          changeHandler={(sort) => setSorted({ label: sort as string, value: sort as string })}
        />
      </PropertiesToolbar>
      <ListProperties typeShow={showType} properties={responseProperties.objects} />
      <PaginateApp amountPages={responseProperties.amountPages} activePage={page} changeActivePage={changeActivePage} />
    </div>
  );
};

const PropertiesToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowAndCountPropertiesBlock = styled.div`
  &,
  & > div {
    display: flex;
    align-items: center;
    gap: 1.389vw;

    @media (min-width: ${theme.media.desktopLarge}px) {
      gap: 20px;
    }

    @media (max-width: ${theme.media.desktop}px) {
      gap: 1.668vw;
    }

    @media (max-width: ${theme.media.tablet}px) {
      gap: 2.604vw;
    }
  }
`;
