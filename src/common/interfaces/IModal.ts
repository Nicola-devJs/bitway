import { StaticImageData } from "next/image";

interface IModal {
  width?: number;
  show: string;
  hideHandler: () => void;
}

export interface IAlertProps extends IModal {
  title: string;
  text?: string;
  textButton: string;
  buttonHandler?: () => void;
}

export interface IModalProps extends IModal {
  children: React.ReactNode;
}

export interface IGalleryProps extends IModal {
  height?: number;
  images: StaticImageData[] | string[];
  initialPosition: number;
}

export type ModalType = "alert" | "gallery" | "modal";

export type GetOptionsType<T extends ModalType> = T extends "alert"
  ? IAlertProps
  : T extends "gallery"
  ? IGalleryProps
  : IModalProps;

export interface IInitializationModal<T extends ModalType> {
  type: T;
  options: Omit<GetOptionsType<T>, "show" | "hideHandler">;
}
