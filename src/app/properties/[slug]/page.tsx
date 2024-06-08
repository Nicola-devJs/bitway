import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { GalleryApp } from "@/common/components/gallery/GalleryApp";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesBlock";
import { PropertyContentPage } from "@/common/componentsPage/PropertyContent/PropertyContentPage";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { fetcherAllPropertys, fetcherOneProperty } from "@/services/Properties";
import { Metadata } from "next";
import React from "react";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const property = await fetcherOneProperty(params.slug);

  return {
    title: `${property.object.heading} | NestHaven`,
  };
}

export default async function Property({ params }: Params) {
  const property = await fetcherOneProperty(params.slug);
  const properties = await fetcherAllPropertys();

  console.log(property);

  return (
    <>
      <ContainerApp>
        <Breadcrumbs namePage={property.object.heading} />
      </ContainerApp>
      <GalleryApp gallery={property.object.photos} />
      <PropertyContentPage property={property.object} />
      <PropertiesBlock properties={property.similarObjects} $paddingBlock={100} title="Similar Properties" />
    </>
  );
}
