"use client";
import React from "react";
import { ToastContainer } from "react-toastify";

interface IProps {}

export const NotificationApp = ({}: IProps) => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
