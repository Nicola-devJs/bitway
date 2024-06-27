import { Breadcrumbs } from "@/common/components/breadcrumbs/Breadcrumbs";
import { EmptyApp } from "@/common/components/empty/EmptyApp";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesList/PropertiesList";
import { SidebarFilter } from "@/common/componentsPage/SidebarFilter/SidebarFilter";
import { generateSearchParams } from "@/common/helpers/searchParams";
import FilterProvider from "@/common/hoc/FilterProvider";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { FlexContent } from "@/common/styledComponents/Flex";
import { fetcherAllPropertys } from "@/services/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties | NestHaven",
};

type PageParams = { params: Record<string, string>; searchParams: Record<string, string> };

export default async function Properties({ searchParams }: PageParams) {
  const paramsString = generateSearchParams(searchParams);
  const properties = await fetcherAllPropertys(paramsString);

  return (
    <>
      <ContainerApp>
        <Breadcrumbs />
        <FlexContent $flexGap={50}>
          <FilterProvider>
            <SidebarFilter />
            {properties.objects.length ? (
              <PropertiesBlock responseProperties={properties} />
            ) : (
              <EmptyApp emptyText="Объектов не найдено" />
            )}
          </FilterProvider>
        </FlexContent>
      </ContainerApp>
    </>
  );
}
