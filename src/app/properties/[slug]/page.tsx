import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { GalleryApp } from "@/common/components/gallery/GalleryApp";
import { PropertyContentPage } from "@/common/componentsPage/PropertyContent/PropertyContentPage";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { fetcherOneProperty } from "@/services/Properties";
import React from "react";

export default async function Property({ params }: { params: { slug: string } }) {
  const Property = await fetcherOneProperty(params.slug);
  console.log(Property);
  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
      </ContainerApp>
      <GalleryApp gallery={Property.photos} />
      <PropertyContentPage {...Property} />
    </>
  );
}
