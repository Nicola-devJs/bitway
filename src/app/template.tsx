import Layout from "@/common/components/layouts";
import React from "react";

export default async function MainTemplate({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
