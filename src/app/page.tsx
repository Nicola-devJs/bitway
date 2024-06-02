import { HomeHeadingBlock } from "@/common/componentsPage/MainContent/HomeContentPage";
import React from "react";

import { SearchProperty } from "@/common/components/searchProperty/SearchProperty";
import { FeaturedProperty } from "@/common/components/featuredProperty/FeaturedProperty";
import { fetcherAllPropertys } from "@/services/Properties";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesBlock";
import { theme } from "@/assets/theme/theme";

export default async function Home() {
  const properties = await fetcherAllPropertys();

  return (
    <>
      <HomeHeadingBlock />
      <SearchProperty />
      {properties && !!properties.objects.length && <FeaturedProperty properties={properties.objects} />}
      {properties && !!properties.objects.length && (
        <PropertiesBlock
          title="Explore the latest properties available"
          properties={properties.objects}
          $bg={theme.colors.grayOpacity(0.1)}
          $paddingBlock={70}
        />
      )}
    </>
  );
}
