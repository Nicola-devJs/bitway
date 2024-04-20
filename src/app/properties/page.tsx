import { InputApp } from "@/common/UI/input/InputApp";
import { Accordion } from "@/common/components/accordion/Accordion";
import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { SidebarFilter } from "@/common/componentsPage/SidebarFilter/SidebarFilter";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Properties | Bitway",
};

export default function Properties() {
  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
        <SidebarFilter />
      </ContainerApp>
    </>
  );
}
