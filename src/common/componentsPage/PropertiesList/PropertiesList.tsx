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
import { useScreenExtension } from "@/common/hooks/useScreenExtension";
import { theme } from "@/assets/theme/theme";
import { IPropertyCard } from "@/common/interfaces/IProperty";

interface IProps {
  properties: IPropertyCard[];
}

export const PropertiesList: FC<IProps> = ({ properties }) => {
  const [showType, setShowType] = useState<ShowType>("tile");
  const { showFilter } = useContext(FilterContext);
  const [maxTabletScreen, maxPhoneScreen] = useScreenExtension([
    { screenExtension: theme.media.tablet, maxScreen: true },
    { screenExtension: theme.media.phone, maxScreen: true },
  ]);
  const changeShowTypeHandler = (type: ShowType) => () => setShowType(type);

  return (
    <div style={{ width: "100%" }}>
      <PropertiesToolbar>
        <ShowAndCountPropertiesBlock>
          {maxTabletScreen && (
            <ButtonApp width={98} onClick={showFilter}>
              Filter
            </ButtonApp>
          )}
          {!maxPhoneScreen && (
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
            </>
          )}

          <TextApp>Showing 1–16 of 72 results</TextApp>
        </ShowAndCountPropertiesBlock>
      </PropertiesToolbar>
      <ListProperties typeShow={showType} countTiles={2} properties={properties} />
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
