import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { GalleryApp } from "@/common/components/gallery/GalleryApp";
import { PropertyContentPage } from "@/common/componentsPage/PropertyContent/PropertyContentPage";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import React from "react";

export default function Property() {
  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
      </ContainerApp>
      <GalleryApp />
      <PropertyContentPage />
    </>
  );
}
