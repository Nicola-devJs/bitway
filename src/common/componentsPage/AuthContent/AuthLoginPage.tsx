"use client";
import React from "react";
import styled from "styled-components";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import { validateEmail, validatePassword } from "@/common/constants/validation";

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

export const AuthLoginPage = () => {
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });

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

  const handler = (data: FormValues) => {
    console.log(data);
  };

  return (
    <AuthContent title="Welcome 👋" subTitle="Please login here">
      <form onSubmit={handleSubmit(handler)}>
        <InputApp
          placeholder="Email"
          type="email"
          label="Email Address"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          errorMessage={emailState.error?.message}
        />
        <InputApp
          placeholder="Password"
          type="password"
          label="Password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          errorMessage={passwordState.error?.message}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <InputApp.Checkbox
            label={<span>Remember Me</span>}
            checked={remember.value}
            onChange={remember.onChange}
            onBlur={remember.onBlur}
            errorMessage={rememberState.error?.message}
          />
          <LinkApp color={theme.colors.blue} path="/auth/forgot">
            Forgot Password?
          </LinkApp>
        </div>
        <ButtonApp>Login</ButtonApp>
      </form>
      <TextBottom>
        Если вы еще не зарегестрированы, перейдите по{" "}
        <LinkApp color={theme.colors.blue} path="/auth/create">
          ссылке
        </LinkApp>
      </TextBottom>
    </AuthContent>
  );
};

const TextBottom = styled(TextApp)`
  margin-top: 2.083vw;

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 2.502vw;
    color: ${theme.colors.white};
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 3.906vw;
  }
`;
