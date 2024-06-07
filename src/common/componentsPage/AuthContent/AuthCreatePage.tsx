"use client";
import React from "react";
import { useController, useForm } from "react-hook-form";
import { AuthContent } from ".";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { InputApp } from "@/common/UI/input/InputApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { theme } from "@/assets/theme/theme";
import { validateEmail, validateName, validatePassword, validateRequired } from "@/common/constants/validation";
import { fetcherAuthCreate } from "@/services/Auth";
import { writingToken } from "@/common/helpers/cookie";
import { useRouter } from "next/navigation";
import { useCustomQuery } from "@/common/hooks/customQuery";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
}

export const AuthCreatePage = () => {
  const { advancedFetcher, isLoading } = useCustomQuery(fetcherAuthCreate);
  const router = useRouter();
  const { handleSubmit, control } = useForm<FormValues>({ mode: "onBlur" });

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

  const handler = async (data: FormValues) => {
    const { agree, ...newUser } = data;
    const res = await advancedFetcher(newUser);

    writingToken(res.token);
    router.push("/");
  };

  return (
    <AuthContent title="Create New Account" subTitle="Please enter details" linkBack="/auth/login">
      <form onSubmit={handleSubmit(handler)}>
        <InputApp
          placeholder="First name"
          label="First name"
          value={firstName.value}
          onChange={firstName.onChange}
          onBlur={firstName.onBlur}
          errorMessage={firstNameState.error?.message}
        />
        <InputApp
          placeholder="Last name"
          label="Last name"
          value={lastName.value}
          onChange={lastName.onChange}
          onBlur={lastName.onBlur}
          errorMessage={lastNameState.error?.message}
        />
        <InputApp
          placeholder="Email Address"
          type="email"
          label="Email Address"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          errorMessage={emailState.error?.message}
        />
        <InputApp.Password
          placeholder="Password"
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
              <LinkApp color={theme.colors.blue} href="#" notViewUnderline>
                Terms & Conditions
              </LinkApp>{" "}
            </span>
          }
          checked={agree.value ?? false}
          onChange={agree.onChange}
          onBlur={agree.onBlur}
          errorMessage={agreeState.error?.message}
        />
        <ButtonApp loading={isLoading}>Signup</ButtonApp>
      </form>
    </AuthContent>
  );
};
