"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { validateRequired } from "@/common/constants/validation";
import { ModalContext } from "@/common/hoc/ModalProvider";

interface FormValues {
  code1: number;
  code2: number;
  code3: number;
  code4: number;
  code5: number;
}

export const AuthOTPPage = () => {
  const { push } = useRouter();
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });

  const handler = (data: FormValues) => {
    console.log(Object.values(data).join(""));
    setOptionModalHandler({
      type: "alert",
      options: {
        title: "Password Changed Successfully",
        text: "Your password has been updated successfully",
        textButton: "Back to Login",
        buttonHandler: () => push("/auth/login"),
      },
    });
    showHandler();
  };

  const arrayCodes = Array(5)
    .fill(" ")
    .map((_, id) => useController<FormValues>({ control, name: `code${id + 1}` as any, rules: validateRequired() }));

  return (
    <>
      <AuthContent
        title="Enter OTP"
        subTitle="We have share a code of your registered email address mark.allen@example.com"
      >
        <form onSubmit={handleSubmit(handler)}>
          <InputApp.Code codes={arrayCodes as any} />
          <ButtonApp>Verify</ButtonApp>
        </form>
      </AuthContent>
    </>
  );
};
