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
    title: `${property.heading} | Bitway`,
  };
}

export default async function Property({ params }: Params) {
  const property = await fetcherOneProperty(params.slug);
  const properties = await fetcherAllPropertys();

  return (
    <>
      <ContainerApp>
        <Breadcrumbs namePage={property.heading} />
      </ContainerApp>
      {/* <GalleryApp gallery={property.photos} /> */}
      <PropertyContentPage {...property} />
      <PropertiesBlock properties={properties.objects} $paddingBlock={100} title="Similar Properties" />
    </>
  );
}
