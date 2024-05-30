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
      {Boolean(properties.length) && <FeaturedProperty properties={properties} />}
      {Boolean(properties.length) && (
        <PropertiesBlock
          title="Explore the latest properties available"
          properties={properties}
          $bg={theme.colors.grayOpacity(0.1)}
          $paddingBlock={70}
        />
      )}
    </>
  );
}
