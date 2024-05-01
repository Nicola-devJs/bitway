import React from "react";

import { FooterApp } from "../footer/FooterApp";
import { HeaderApp } from "../header/HeaderApp";
import { theme } from "@/assets/theme/theme";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <HeaderApp />
      <main style={{ flex: "1 1 auto" }}>{children}</main>
      <FooterApp />
    </div>
  );
}
