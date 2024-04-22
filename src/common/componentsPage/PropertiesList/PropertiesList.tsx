"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { NextImage } from "@/common/components/NextImage";
import { ListProperties, ShowType } from "@/common/components/listProperties/ListProperties";
import listStyleIcon from "@/assets/icons/list-style.svg";
import tileStyleIcon from "@/assets/icons/tile-style.svg";
import { TextApp } from "@/common/styledComponents/Text";

export const PropertiesList = () => {
  const [showType, setShowType] = useState<ShowType>("list");
  const changeShowTypeHandler = (type: ShowType) => () => setShowType(type);

  return (
    <div>
      <PropertiesToolbar>
        <ShowAndCountPropertiesBlock>
          <ContainerIcon onClick={changeShowTypeHandler("tile")}>
            <NextImage info={tileStyleIcon} $width={24} />
          </ContainerIcon>
          <ContainerIcon onClick={changeShowTypeHandler("list")}>
            <NextImage info={listStyleIcon} $width={24} />
          </ContainerIcon>
          <TextApp>Showing 1–16 of 72 results</TextApp>
        </ShowAndCountPropertiesBlock>
      </PropertiesToolbar>
      <ListProperties typeShow={showType} countTiles={2} />
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
  gap: 20px;
`;

const ContainerIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
