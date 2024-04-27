import { NextImage } from "@/common/components/NextImage";
import { HomeHeadingBlock, HomeLatestProperties } from "@/common/componentsPage/MainContent/HomeContentPage";
import React from "react";
import mainImg from "@/assets/images/main-img.jpg";
import { SearchProperty } from "@/common/components/searchProperty/SearchProperty";

export default function Home() {
  return (
    <>
      <HomeHeadingBlock />
      <NextImage info={mainImg} $fullWidth />
      {/* TODO Пока не нашел приминение */}
      {/* <SearchProperty /> */}
      <HomeLatestProperties />
    </>
  );
}
