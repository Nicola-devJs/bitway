import { NextImage } from "@/common/components/NextImage";
import { HomeHeadingBlock, HomeLatestProperties } from "@/common/componentsPage/MainContent/HomeContentPage";
import React from "react";
import mainImg from "@/assets/images/main-img.jpg";
import { SearchProperty } from "@/common/components/searchProperty/SearchProperty";
import { FeaturedProperty } from "@/common/components/featuredProperty/FeaturedProperty";

export default function Home() {
  return (
    <>
      <HomeHeadingBlock />
      <NextImage info={mainImg} $fullWidth />
      <SearchProperty />
      <FeaturedProperty />
      <HomeLatestProperties title="Explore the latest properties available" />
    </>
  );
}
