import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { PropertiesList } from "@/common/componentsPage/PropertiesList/PropertiesList";
import { SidebarFilter } from "@/common/componentsPage/SidebarFilter/SidebarFilter";
import FilterProvider from "@/common/hoc/FilterProvider";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { FlexContent } from "@/common/styledComponents/Flex";
import { Metadata } from "next";
import mockProperties from "../../../public/mockData/properties.json";
import { PaginateProperties } from "@/common/componentsPage/PropertiesList/PaginateProperties";

export const metadata: Metadata = {
  title: "Properties | Bitway",
};

export default function Properties() {
  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
        <FlexContent $flexGap={50}>
          <FilterProvider>
            <SidebarFilter />
            <PropertiesList properties={mockProperties} />
          </FilterProvider>
        </FlexContent>
        <PaginateProperties properties={mockProperties} />
      </ContainerApp>
    </>
  );
}
