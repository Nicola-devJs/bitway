"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface IProps<T> {
  handlerCallback: (data: T) => void;
  children: React.ReactNode;
}

export function FormApp<T extends FieldValues>({ children, handlerCallback }: IProps<T>) {
  const { handleSubmit } = useForm<T>({ mode: "onBlur" });

  return <form onSubmit={handleSubmit(handlerCallback)}>{children}</form>;
}
