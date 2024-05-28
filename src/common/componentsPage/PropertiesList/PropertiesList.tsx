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
import { useScreenExtension } from "@/common/hooks/screenExtension";
import { theme } from "@/assets/theme/theme";
import { IResponseProperties } from "@/common/interfaces/property/property";
import { SelectApp } from "@/common/UI/select/SelectApp";

import { PaginateApp } from "@/common/UI/paginate/PaginateApp";

// TODO хардкод по сортировке объектов
const sortedOptions = [
  { label: "hight", value: "hight" },
  { label: "low", value: "low" },
];

interface IProps {
  responseProperties: IResponseProperties | undefined;
}

export const PropertiesList: FC<IProps> = ({ responseProperties }) => {
  const [showType, setShowType] = useState<ShowType>("tile");
  const [sorted, setSorted] = useState<{ label: string; value: string }>(sortedOptions[0]);
  const { showFilter } = useContext(FilterContext);
  const [maxTabletScreen, minPhoneScreen] = useScreenExtension([
    { screenExtension: theme.media.tablet, maxScreen: true },
    { screenExtension: theme.media.phone },
  ]);
  const [page, setPage] = useState(0);

  const changeShowTypeHandler = (type: ShowType) => () => setShowType(type);
  const changeActivePage = (page: number) => setPage(page);

  return (
    <div style={{ width: "100%" }}>
      <PropertiesToolbar>
        <ShowAndCountPropertiesBlock>
          {maxTabletScreen && (
            <ButtonApp width={98} onClick={showFilter}>
              Filter
            </ButtonApp>
          )}
          {minPhoneScreen && (
            <>
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
                Showing {responseProperties?.first}–{responseProperties?.last} of {responseProperties?.items} results
              </TextApp>
            </>
          )}
        </ShowAndCountPropertiesBlock>
        <SelectApp.Sorted
          label="Sorted by"
          options={sortedOptions}
          value={sorted.label}
          changeHandler={(sort) => setSorted({ label: sort as string, value: sort as string })}
        />
      </PropertiesToolbar>
      {responseProperties && (
        <>
          <ListProperties typeShow={showType} countTiles={2} properties={responseProperties.data} />
          <PaginateApp
            countItems={responseProperties.items}
            viewCountItems={4}
            activeIdPage={page}
            changeIdPage={changeActivePage}
          />
        </>
      )}
    </div>
  );
};

const PropertiesToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowAndCountPropertiesBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1.389vw;

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
  }
`;
