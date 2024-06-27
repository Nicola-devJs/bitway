"use client";
import React, { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { validateRequired } from "@/common/constants/validation";
import { fetcherAuthOTP } from "@/services/Auth";
import { NotificationContext } from "@/common/hoc/NotificationProvider";

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
  const { onSuccessNotify, onErrorNotify } = useContext(NotificationContext);

  const handler = async (data: FormValues) => {
    try {
      const code = Object.values(data).join("");
      await fetcherAuthOTP({ code });
      onSuccessNotify("Код успешно проверен");
      router.push(`/auth/change?email=${emailValue}`);
    } catch (error) {
      onErrorNotify("Код не валиден");
    }
  };

  const arrayCodes = Array(5)
    .fill(" ")
    .map((_, id) => useController<FormValues>({ control, name: `code${id + 1}` as any, rules: validateRequired() }));

  return (
    <>
      <AuthContent
        title="Введите код"
        subTitle={`Мы поделились кодом вашего зарегистрированного адреса электронной почты ${emailValue}`}
        linkBack="/auth/forgot"
      >
        <form onSubmit={handleSubmit(handler)}>
          <InputApp.Code codes={arrayCodes as any} />
          <ButtonApp>Проверить</ButtonApp>
        </form>
      </AuthContent>
    </>
  );
};
