import type { RegisterOptions } from "react-hook-form";
import { emailRegexp } from "./regexp";

export const validateEmail = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  pattern: { value: emailRegexp, message: "Не правильный формат email" },
});

export const validatePassword = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  minLength: { value: 10, message: "Пароль меньше 10 символов" },
});

export const validateName = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  minLength: { value: 10, message: "Имя меньше 10 символов" },
});

export const validateRequired = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
});
