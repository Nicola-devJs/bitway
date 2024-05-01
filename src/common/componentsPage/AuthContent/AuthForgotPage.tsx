"use client";
import React from "react";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { validateEmail } from "@/common/constants/validation";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
}

export const AuthForgotPage = () => {
  const { push } = useRouter();
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });
  const handler = (data: FormValues) => {
    console.log(data);
    push("/auth/otp");
  };

  const { field: email, fieldState: emailState } = useController({ control, name: "email", rules: validateEmail() });

  return (
    <AuthContent
      title="Forgot Password"
      subTitle="Enter your registered email address. we’ll send you a code to reset your password."
    >
      <form onSubmit={handleSubmit(handler)}>
        <InputApp
          placeholder="Enter Email"
          type="email"
          label="Email Address"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          errorMessage={emailState.error?.message}
        />
        <ButtonApp>Send OTP</ButtonApp>
      </form>
    </AuthContent>
  );
};
