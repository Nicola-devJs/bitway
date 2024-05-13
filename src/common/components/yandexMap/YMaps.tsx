import React, { FC, useState } from "react";
import styled from "styled-components";
import { Map, YMaps } from "react-yandex-maps";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import { theme } from "@/assets/theme/theme";
import Script from "next/script";

interface IProps {
  height?: number;
}

export const YandexMapsApp: FC<IProps> = ({ height = 277 }) => {
  const mapState = { center: [55.555, 44.3434], zoom: 10, behaviors: ["default", "scrollZoom"] };
  const [isShowMap, setShowMap] = useState(false);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YMAPS_API_KEY}&lang=ru_RU`}
        onLoad={() => {
          setShowMap(true);
        }}
      />
      {isShowMap ? (
        <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YMAPS_API_KEY }}>
          <StyledMap state={mapState} $height={height}></StyledMap>
        </YMaps>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

const StyledMap = styled(Map)<{ $height: number }>`
  width: 100%;
  height: ${(props) => transformAdaptiveSize(props.$height)};
  overflow: hidden;

  @media (max-width: ${theme.media.desktop}px) {
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.desktop)};
  }

  @media (max-width: ${theme.media.tablet}px) {
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.tablet)};
  }

  @media (max-width: ${theme.media.phone}px) {
    height: ${(props) => transformAdaptiveSize(props.$height, theme.media.phone)};
  }
`;
