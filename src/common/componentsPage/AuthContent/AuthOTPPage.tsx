"use client";
import React, { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { validateRequired } from "@/common/constants/validation";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { fetcherAuthOTP } from "@/services/Auth";

interface FormValues {
  code1: number;
  code2: number;
  code3: number;
  code4: number;
  code5: number;
}

export const AuthOTPPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });
  const emailValue = searchParams.get("email");

  const handler = async (data: FormValues) => {
    const code = Object.values(data).join("");
    await fetcherAuthOTP({ code });

    router.push(`/auth/change?email=${emailValue}`);
  };

  const arrayCodes = Array(5)
    .fill(" ")
    .map((_, id) => useController<FormValues>({ control, name: `code${id + 1}` as any, rules: validateRequired() }));

  return (
    <>
      <AuthContent
        title="Enter OTP"
        subTitle={`Мы поделились кодом вашего зарегистрированного адреса электронной почты ${emailValue}`}
        linkBack="/auth/forgot"
      >
        <form onSubmit={handleSubmit(handler)}>
          <InputApp.Code codes={arrayCodes as any} />
          <ButtonApp>Verify</ButtonApp>
        </form>
      </AuthContent>
    </>
  );
};
