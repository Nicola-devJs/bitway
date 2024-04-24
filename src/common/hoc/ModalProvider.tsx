"use client";
import React, { createContext, useState } from "react";
import { InitializationModalApp } from "../UI/modal/ModalApp";
import { GetOptionsType, IInitializationModal, ModalType } from "../interfaces/IModal";

interface IContextModal {
  show: string;
  showHandler: () => void;
  hideHandler: () => void;
  setOptionModalHandler: <T extends ModalType>(props: IInitializationModal<T>) => void;
}

export const ModalContext = createContext<IContextModal>({} as IContextModal);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState("");
  const [optionModal, setOptionModal] = useState<IInitializationModal<ModalType>>({
    type: "modal",
    options: {} as GetOptionsType<ModalType>,
  });

  const showHandler = () => {
    setShow("show");
    document.body.classList.add("hide");
  };
  const hideHandler = () => {
    setShow("");
    document.body.classList.remove("hide");
  };

  function setOptionModalHandler<T extends ModalType>({ type, options }: IInitializationModal<T>) {
    setOptionModal({ type, options });
  }

  return (
    <ModalContext.Provider value={{ show, showHandler, hideHandler, setOptionModalHandler }}>
      <>
        {children}
        <InitializationModalApp type={optionModal.type} options={optionModal.options} />
      </>
    </ModalContext.Provider>
  );
};
