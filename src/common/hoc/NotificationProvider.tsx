"use client";
import { ReactNode, createContext, useState } from "react";
import { ToastOptions, toast } from "react-toastify";
import { NotificationApp } from "../UI/notification/NotificationApp";
interface INotificationContext {
  onSuccessNotify: (text: string) => void;
  onErrorNotify: (text: string) => void;
}

export const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

const option: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const onSuccessNotify = (text: string) => {
    toast.success(text, option);
  };

  const onErrorNotify = (text: string) => {
    toast.error(text, option);
  };

  return (
    <NotificationContext.Provider value={{ onSuccessNotify, onErrorNotify }}>
      <NotificationApp />
      {children}
    </NotificationContext.Provider>
  );
};
