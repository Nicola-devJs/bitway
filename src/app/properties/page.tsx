import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { PropertiesList } from "@/common/componentsPage/PropertiesList/PropertiesList";
import { SidebarFilter } from "@/common/componentsPage/SidebarFilter/SidebarFilter";
import FilterProvider from "@/common/hoc/FilterProvider";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { FlexContent } from "@/common/styledComponents/Flex";
import { fetcherAllPropertys } from "@/services/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | Bitway",
};

type PageParams = { params: Record<string, string>; searchParams: Record<string, string> };

export default async function Properties({ searchParams }: PageParams) {
  const properties = await fetcherAllPropertys();

  console.log(JSON.parse(searchParams.price));
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
