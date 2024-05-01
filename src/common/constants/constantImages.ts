import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import imgLogin from "@/assets/images/auth/login.jpg";
import imgCreate from "@/assets/images/auth/create.jpg";
import imgForgot from "@/assets/images/auth/forgot.jpg";
import imgOtp from "@/assets/images/auth/otp.jpg";

import iconBedBlack from "@/assets/icons/property-card/bed-b.svg";
import iconBathBlack from "@/assets/icons/property-card/bath-b.svg";
import iconCarBlack from "@/assets/icons/property-card/car-b.svg";
import iconBedWhite from "@/assets/icons/property-card/bed-w.svg";
import iconBathWhite from "@/assets/icons/property-card/bath-w.svg";
import iconCarWhite from "@/assets/icons/property-card/car-w.svg";

import iconTelegram from "@/assets/icons/feedback/telegram.svg";
import iconWhatsapp from "@/assets/icons/feedback/whatsapp.svg";
import iconViber from "@/assets/icons/feedback/viber.svg";

type ConstImagesType = { [x: string]: StaticImageData };

export const authPages: ConstImagesType = {
  login: imgLogin,
  create: imgCreate,
  forgot: imgForgot,
  otp: imgOtp,
};

export const propertyCardIconsBlack: ConstImagesType = {
  bed: iconBedBlack,
  bath: iconBathBlack,
  car: iconCarBlack,
};

export const propertyCardIconsWhite: ConstImagesType = {
  bed: iconBedWhite,
  bath: iconBathWhite,
  car: iconCarWhite,
};

export const feedbackButtonIcons = {
  telegram: iconTelegram,
  whatsapp: iconWhatsapp,
  viber: iconViber,
};
