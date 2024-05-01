import { HomeLatestProperties } from "@/common/componentsPage/MainContent/HomeContentPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured | Bitway",
};

export default function Page() {
  return <HomeLatestProperties title="Explore the latest properties available" />;
}
