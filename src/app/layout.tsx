import type { Metadata } from "next";
import "../../public/global.css";
import StyledComponentsRegistry from "@/lib/registryStyled";
import { jost } from "@/common/constants/font";
import ModalProvider from "@/common/hoc/ModalProvider";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Bitway",
  description: "Bitway created by next",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = cookies().get("token");
  console.log("TOKEN", token?.value);

  return (
    <html lang="en">
      <body className={jost.className}>
        <StyledComponentsRegistry>
          <ModalProvider>{children}</ModalProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
