import Layout from "@/common/components/layouts";
import React from "react";

export default function MainTemplate({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
