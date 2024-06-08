import { theme } from "@/assets/theme/theme";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesBlock";
import { fetcherGetAllFavourite } from "@/services/Properties";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Featured | NestHaven",
};

export default async function Page() {
  const cookieStorage = cookies();
  const token = cookieStorage.get("token");

  const properties = await fetcherGetAllFavourite(token?.value);

  return <PropertiesBlock properties={properties.objects} $bg={theme.colors.grayOpacity(0.1)} $paddingBlock={70} />;
}
