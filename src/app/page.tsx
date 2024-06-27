import { HomeHeadingBlock } from "@/common/componentsPage/MainContent/HomeContentPage";
import React from "react";

import { SearchProperty } from "@/common/components/searchProperty/SearchProperty";
import { FeaturedProperty } from "@/common/components/featuredProperty/FeaturedProperty";
import { fetcherAllPropertys, fetcherPropularProperties } from "@/services/Properties";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesBlock";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";

export default async function Home() {
  const properties = await fetcherAllPropertys();
  const popularProperties = await fetcherPropularProperties();

  return (
    <>
      <HomeHeadingBlock />
      <SearchProperty />
      {properties?.objects.length ? <FeaturedProperty properties={popularProperties.objects} /> : null}
      {properties?.objects.length ? (
        <PropertiesBlock
          title="Последние предложения недвижимости"
          properties={properties.objects}
          $bg={theme.colors.grayOpacity(0.1)}
          $paddingBlock={70}
        />
      ) : (
        <ContainerApp>
          <div>На сайте пока объектов нет, вы можете добавить их в вашем кабинете</div>
        </ContainerApp>
      )}
    </>
  );
}
