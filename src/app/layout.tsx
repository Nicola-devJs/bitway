import type { Metadata } from "next";
import { Jost, Playfair } from "next/font/google";
import "./globals.scss";
import HeaderApp from "@/components/header/HeaderApp";
import FooterApp from "@/components/footer/FooterApp";
import StyledComponentsRegistry from "@/lib/registryStyled";

const jost = Jost({ subsets: ["latin"], style: "normal", weight: ["400", "700"] });

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
