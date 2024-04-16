"use client";
import React, { useEffect } from "react";
import { Control, FieldValues, useForm } from "react-hook-form";

interface IProps<T> {
  handlerCallback: (data: T) => void;
  children: React.ReactNode;
  getControl: (control: Control<any, any>) => void;
}

export function FormApp<T extends FieldValues>({ children, handlerCallback, getControl }: IProps<T>) {
  const { handleSubmit, control } = useForm<T>({ mode: "onBlur" });
  console.log(control);
  useEffect(() => {
    getControl(control);
  }, []);

  return <form onSubmit={handleSubmit(handlerCallback)}>{children}</form>;
}
