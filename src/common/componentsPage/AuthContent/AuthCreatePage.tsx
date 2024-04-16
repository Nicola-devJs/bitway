"use client";
import React from "react";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { theme } from "@/assets/theme/theme";
import { validateEmail, validateName, validatePassword, validateRequired } from "@/common/constants/validation";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
}

export const AuthCreatePage = () => {
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });
  const handler = (data: FormValues) => {
    console.log(data);
  };

  const { field: firstName, fieldState: firstNameState } = useController({
    control,
    name: "firstName",
    rules: validateName(),
  });
  const { field: lastName, fieldState: lastNameState } = useController({
    control,
    name: "lastName",
    rules: validateName(),
  });
  const { field: email, fieldState: emailState } = useController({ control, name: "email", rules: validateEmail() });
  const { field: password, fieldState: passwordState } = useController({
    control,
    name: "password",
    rules: validatePassword(),
  });
  const { field: agree, fieldState: agreeState } = useController({ control, name: "agree", rules: validateRequired() });

  return (
    <AuthContent title="Create New Account" subTitle="Please enter details">
      <form onSubmit={handleSubmit(handler)}>
        <InputApp
          placeholder="Enter first name ..."
          label="First name"
          value={firstName.value}
          onChange={firstName.onChange}
          onBlur={firstName.onBlur}
          errorMessage={firstNameState.error?.message}
        />
        <InputApp
          placeholder="Enter last name ..."
          label="Last name"
          value={lastName.value}
          onChange={lastName.onChange}
          onBlur={lastName.onBlur}
          errorMessage={lastNameState.error?.message}
        />
        <InputApp
          placeholder="Enter Email ..."
          type="email"
          label="Email Address"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          errorMessage={emailState.error?.message}
        />
        <InputApp
          placeholder="Enter Email ..."
          type="password"
          label="Password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlur}
          errorMessage={passwordState.error?.message}
        />
        <InputApp.Checkbox
          label={
            <span>
              I agree to the{" "}
              <LinkApp color={theme.colors.blue} path="#">
                Terms & Conditions
              </LinkApp>{" "}
            </span>
          }
          checked={agree.value}
          onChange={agree.onChange}
          onBlur={agree.onBlur}
          errorMessage={agreeState.error?.message}
        />
        <ButtonApp>Signup</ButtonApp>
      </form>
    </AuthContent>
  );
};
