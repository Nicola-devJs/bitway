import Layout from "@/common/components/layouts";
import { setCookie } from "@/common/helpers/writingToken";
import { fetcherAuthMe } from "@/services/Auth";
import { cookies } from "next/headers";
import React from "react";

export default async function MainTemplate({ children }: { children: React.ReactNode }) {
  const token = cookies().get("token")?.value;
  const isUser = token ? await fetcherAuthMe(token) : null;

  return <Layout user={isUser}>{children}</Layout>;
}
