import { HomeHeadingBlock, HomeLatestProperties } from "@/common/componentsPage/MainContent/HomeContentPage";
import React from "react";

import { SearchProperty } from "@/common/components/searchProperty/SearchProperty";
import { FeaturedProperty } from "@/common/components/featuredProperty/FeaturedProperty";

export default function Home() {
  return (
    <>
      <HomeHeadingBlock />
      <SearchProperty />
      <FeaturedProperty />
      <HomeLatestProperties title="Explore the latest properties available" />
    </>
  );
}
