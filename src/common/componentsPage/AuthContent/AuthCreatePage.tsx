"use client";
import React, { useContext } from "react";
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
import { NotificationContext } from "@/common/hoc/NotificationProvider";

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
  const { onSuccessNotify, onErrorNotify } = useContext(NotificationContext);

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
    try {
      const { agree, ...newUser } = data;
      const res = await advancedFetcher(newUser);

      writingToken(res.token);
      router.push("/");
      onSuccessNotify("Вы успешно создали аккаунт");
    } catch (error) {
      onErrorNotify("При создании аккаунта произошла ошибка");
    }
  };

  return (
    <AuthContent title="Создать новый аккаунт" subTitle="Пожалуйста введите свои данные ниже" linkBack="/auth/login">
      <form onSubmit={handleSubmit(handler)}>
        <InputApp
          placeholder="Введите имя"
          label="Имя"
          value={firstName.value}
          onChange={firstName.onChange}
          onBlur={firstName.onBlur}
          errorMessage={firstNameState.error?.message}
        />
        <InputApp
          placeholder="Введите фамилию"
          label="Фамилию"
          value={lastName.value}
          onChange={lastName.onChange}
          onBlur={lastName.onBlur}
          errorMessage={lastNameState.error?.message}
        />
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
        <InputApp.Checkbox
          label={
            <span>
              Я согласен с{" "}
              <LinkApp color={theme.colors.blue} href="#" notViewUnderline>
                обработкой данный
              </LinkApp>{" "}
            </span>
          }
          checked={agree.value ?? false}
          onChange={agree.onChange}
          onBlur={agree.onBlur}
          errorMessage={agreeState.error?.message}
        />
        <ButtonApp disabled={isLoading}>Зарегистрироваться</ButtonApp>
      </form>
    </AuthContent>
  );
};
