import type { Metadata } from "next";
import "../../public/global.css";
import StyledComponentsRegistry from "@/lib/registryStyled";
import { jost } from "@/common/constants/font";
import ModalProvider from "@/common/hoc/ModalProvider";
import { NotificationProvider } from "@/common/hoc/NotificationProvider";

export const metadata: Metadata = {
  title: "NestHaven",
  description: "NestHaven created by Stas Malyshev",
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
          <ModalProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </ModalProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
