import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { PropertiesList } from "@/common/componentsPage/PropertiesList/PropertiesList";
import { SidebarFilter } from "@/common/componentsPage/SidebarFilter/SidebarFilter";
import FilterProvider from "@/common/hoc/FilterProvider";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { FlexContent } from "@/common/styledComponents/Flex";
import { fetcherAllPropertysWithPagination } from "@/services/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Bitway",
};

export default async function Properties() {
  const properties = await fetcherAllPropertysWithPagination();

  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
        <FlexContent $flexGap={50}>
          <FilterProvider>
            <SidebarFilter />
            <PropertiesList responseProperties={properties} />
          </FilterProvider>
        </FlexContent>
      </ContainerApp>
    </>
  );
}
