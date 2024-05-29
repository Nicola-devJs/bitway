import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { GalleryApp } from "@/common/components/gallery/GalleryApp";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesBlock";
import { PropertyContentPage } from "@/common/componentsPage/PropertyContent/PropertyContentPage";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { fetcherAllPropertys, fetcherOneProperty } from "@/services/Properties";
import React from "react";

export default async function Property({ params }: { params: { slug: string } }) {
  const Property = await fetcherOneProperty(params.slug);
  const properties = await fetcherAllPropertys();

  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
      </ContainerApp>
      <GalleryApp gallery={Property.photos} />
      <PropertyContentPage {...Property} />
      <PropertiesBlock properties={properties} $paddingBlock={100} title="Similar Properties" />
    </>
  );
}
