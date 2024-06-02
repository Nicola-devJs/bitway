"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import { IUserResponse } from "@/common/interfaces/IAuth";
import { UserContext } from "@/common/hoc/UserProvider";

export default function Layout({ children, user }: { children: React.ReactNode; user: IUserResponse | null }) {
  const { changeUser } = useContext(UserContext);
  const path = usePathname();

  useEffect(() => {
    changeUser(user);
  }, []);

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
