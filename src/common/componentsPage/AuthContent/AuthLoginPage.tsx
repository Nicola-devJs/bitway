"use client";
import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import { validateEmail, validatePassword } from "@/common/constants/validation";
import { fetcherAuthLogin } from "@/services/Auth";
import { setCookie, writingToken } from "@/common/helpers/cookie";
import { useRouter } from "next/navigation";
import { useCustomQuery } from "@/common/hooks/customQuery";
import { NotificationContext } from "@/common/hoc/NotificationProvider";

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

export const AuthLoginPage = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });
  const { advancedFetcher, isLoading } = useCustomQuery(fetcherAuthLogin);
  const { onSuccessNotify, onErrorNotify } = useContext(NotificationContext);

  const { field: email, fieldState: emailState } = useController({
    control,
    name: "email",
    rules: validateEmail(),
  });
  const { field: password, fieldState: passwordState } = useController({
    control,
    name: "password",
    rules: validatePassword(),
  });
  const { field: remember, fieldState: rememberState } = useController({
    control,
    name: "remember",
  });

  const handler = async (data: FormValues) => {
    const { remember, ...user } = data;

    try {
      const res = await advancedFetcher(user);

      writingToken(res.token);
      router.push("/");
      onSuccessNotify("Вы успешно вошли в аккаунт");
    } catch (error) {
      onErrorNotify("Произошла ошибка при авторизации");
    }
  };

  return (
    <AuthContent
      title="Добро пожаловать 👋"
      subTitle="Чтобы получить полный доступ к сервису, авторизируйтесь ниже"
      linkBack="/"
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
        <InputApp.Password
          placeholder="Введите пароль"
          label="Пароль"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          errorMessage={passwordState.error?.message}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <InputApp.Checkbox
            label={<span>Запомнить меня</span>}
            checked={remember.value ?? false}
            onChange={remember.onChange}
            onBlur={remember.onBlur}
            errorMessage={rememberState.error?.message}
          />
          <LinkApp color={theme.colors.blue} href="/auth/forgot" notViewUnderline>
            Забыли пароль?
          </LinkApp>
        </div>
        <ButtonApp disabled={isLoading}>Войти</ButtonApp>
      </form>
      <TextBottom>
        Если вы еще не зарегестрированы, перейдите по{" "}
        <LinkApp color={theme.colors.blue} href="/auth/create" notViewUnderline>
          ссылке
        </LinkApp>
      </TextBottom>
    </AuthContent>
  );
};

const TextBottom = styled(TextApp)`
  margin-top: 2.083vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin-top: 30px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 2.502vw;
    color: ${theme.colors.white};
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 3.906vw;
  }
`;
