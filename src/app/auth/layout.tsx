import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Auth | NestHaven",
  description: "Registration in servise NestHaven",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
