"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import { IUserResponse } from "@/common/interfaces/IAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <>
      {!path.includes("auth") ? (
        <MainLayout>{children}</MainLayout>
      ) : (
        <AuthLayout authPage={path.split("/").at(-1)!}>{children}</AuthLayout>
      )}
    </>
  );
}
