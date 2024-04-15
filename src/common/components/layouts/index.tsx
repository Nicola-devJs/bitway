"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return <>{!path.includes("auth") ? <MainLayout>{children}</MainLayout> : <AuthLayout>{children}</AuthLayout>}</>;
}
