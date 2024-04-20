import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Auth | Bitway",
  description: "Registration in servise bitway",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
