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

const initialOptionModal: IInitializationModal<ModalType> = {
  type: "modal",
  options: {} as GetOptionsType<ModalType>,
};

export const ModalContext = createContext<IContextModal>({} as IContextModal);

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState("");
  const [optionModal, setOptionModal] = useState<IInitializationModal<ModalType>>(initialOptionModal);

  const showHandler = () => {
    setTimeout(() => {
      setShow("show");
      document.body.classList.add("hide");
    }, 0);
  };
  const hideHandler = () => {
    setTimeout(() => {
      setShow("");
      document.body.classList.remove("hide");
    }, 0);
    setTimeout(() => {
      setOptionModal(initialOptionModal);
    }, 200);
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
}
