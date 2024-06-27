"use client";
import React, { useContext, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { validateEmail } from "@/common/constants/validation";
import { useRouter } from "next/navigation";
import { fetcherAuthForgot } from "@/services/Auth";
import { useCustomQuery } from "@/common/hooks/customQuery";
import { NotificationContext } from "@/common/hoc/NotificationProvider";

interface FormValues {
  email: string;
}

export const AuthForgotPage = () => {
  const { isLoading, advancedFetcher } = useCustomQuery(fetcherAuthForgot);

  const router = useRouter();
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });
  const { onErrorNotify, onSuccessNotify } = useContext(NotificationContext);

  const handler = async (data: FormValues) => {
    try {
      await advancedFetcher(data);
      onSuccessNotify("Ваша почта одобрена");
      router.push(`/auth/otp?email=${data.email}`);
    } catch (error) {
      onErrorNotify("Почта для изменения пароля не обработана");
    }
  };

  const { field: email, fieldState: emailState } = useController({ control, name: "email", rules: validateEmail() });

  return (
    <AuthContent
      title="Забыли пароль"
      subTitle="Введите зарегистрированный адрес электронной почты. Мы вышлем вам код для сброса пароля."
      linkBack="/auth/login"
    >
      <form onSubmit={handleSubmit(handler)}>
        <InputApp
          placeholder="Введите email"
          type="email"
          label="Email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          errorMessage={emailState.error?.message}
        />
        <ButtonApp disabled={isLoading}>Отправить код</ButtonApp>
      </form>
    </AuthContent>
  );
};
