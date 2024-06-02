import type { Metadata } from "next";
import "../../public/global.css";
import StyledComponentsRegistry from "@/lib/registryStyled";
import { jost } from "@/common/constants/font";
import ModalProvider from "@/common/hoc/ModalProvider";
import { UserProvider } from "@/common/hoc/UserProvider";

export const metadata: Metadata = {
  title: "Bitway",
  description: "Bitway created by next",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <StyledComponentsRegistry>
          <UserProvider>
            <ModalProvider>{children}</ModalProvider>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
