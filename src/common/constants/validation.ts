import type { RegisterOptions } from "react-hook-form";
import { emailRegexp } from "./regexp";

export const validateEmail = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  pattern: { value: emailRegexp, message: "Не правильный формат email" },
});

// TODO validation pass !/(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+)/.test(value)

export const validatePassword = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  validate: (value = "") => (!value || value.length < 5 || value.length > 26 ? "Не корректный пароль" : true),
});

export const validateName = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  minLength: { value: 5, message: "Имя меньше 5 символов" },
});

export const validatePhone = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
  validate: (value: string = "") => {
    const resultResponse = value.length > 12 ? `больше на ${value.length - 12}` : `меньше на ${12 - value.length}`;
    return !value.startsWith("+")
      ? "Номер должен начинаться с +"
      : !value || !/^\+\d{11}$/.test(value)
      ? `Не корректный телефон, ${resultResponse} символов`
      : true;
  },
});

export const validateRequired = (requiredMessage: string = "Required"): RegisterOptions => ({
  required: { value: true, message: requiredMessage },
});
