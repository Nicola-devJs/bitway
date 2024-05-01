import { BannerLayour } from "@/common/componentsPage/BannerLayout/BannerLayour";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BannerLayour />
      <>{children}</>
    </>
  );
}
