import type { Metadata } from "next";
import { Jost, Playfair } from "next/font/google";
import "../../public/global.css";
import { HeaderApp } from "@/common/components/header/HeaderApp";
import { FooterApp } from "@/common/components/footer/FooterApp";
import StyledComponentsRegistry from "@/lib/registryStyled";

const jost = Jost({ subsets: ["latin"], style: "normal", weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Bitway",
  description: "Bitway created by next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <StyledComponentsRegistry>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <HeaderApp />
            <main style={{ flex: "1 1 auto" }}>{children}</main>
            <FooterApp />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
