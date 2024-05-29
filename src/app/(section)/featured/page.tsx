import { theme } from "@/assets/theme/theme";
import { PropertiesBlock } from "@/common/componentsPage/PropertiesBlock";
import { fetcherAllPropertys } from "@/services/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured | Bitway",
};

export default async function Page() {
  const properties = await fetcherAllPropertys();

  return <PropertiesBlock properties={properties} $bg={theme.colors.grayOpacity(0.1)} $paddingBlock={70} />;
}
