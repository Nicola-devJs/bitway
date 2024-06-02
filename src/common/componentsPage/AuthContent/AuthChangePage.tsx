"use client";
import React, { useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { validatePassword } from "@/common/constants/validation";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { fetcherAuthChangePassword } from "@/services/Auth";
import { useCustomQuery } from "@/common/hooks/customQuery";

interface FormValues {
  password: string;
  againPassword: string;
}

export const AuthChangePage = () => {
  const { advancedFetcher, isLoading } = useCustomQuery(fetcherAuthChangePassword);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });

  const handler = async ({ password }: FormValues) => {
    const email = searchParams.get("email");
    if (!email) {
      return console.error("Invalid email");
    }
    const data = { password, email };

    const res = await advancedFetcher(data);
    console.log(res);

    await setOptionModalHandler({
      type: "alert",
      options: {
        title: "Password Changed Successfully",
        text: "Your password has been updated successfully",
        textButton: "Back to Login",
        buttonHandler: () => router.push("/auth/login"),
      },
    });
    showHandler();
  };

  const { field: password, fieldState: passwordState } = useController({
    control,
    name: "password",
    rules: validatePassword(),
  });

  const { field: againPassword, fieldState: againPasswordState } = useController({
    control,
    name: "againPassword",
    rules: {
      validate: (value, formState) => (formState.password !== value ? "Вы должны повторить новый пароль" : true),
    },
  });

  return (
    <>
      <AuthContent title="Enter OTP" subTitle={`Вы можете изменить свой пароль`}>
        <form onSubmit={handleSubmit(handler)}>
          <InputApp.Password
            placeholder="Password"
            label="Password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            errorMessage={passwordState.error?.message}
          />
          <InputApp.Password
            placeholder="Password"
            label="Password again"
            value={againPassword.value}
            onChange={againPassword.onChange}
            onBlur={againPassword.onBlur}
            errorMessage={againPasswordState.error?.message}
          />
          <ButtonApp loading={isLoading}>Change</ButtonApp>
        </form>
      </AuthContent>
    </>
  );
};