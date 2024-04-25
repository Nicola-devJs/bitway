import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import imgLogin from "@/assets/images/auth/login.jpg";
import imgCreate from "@/assets/images/auth/create.jpg";
import imgForgot from "@/assets/images/auth/forgot.jpg";
import imgOtp from "@/assets/images/auth/otp.jpg";

import iconBed from "@/assets/icons/property-card/bed.svg";
import iconBath from "@/assets/icons/property-card/bath.svg";
import iconCar from "@/assets/icons/property-card/car.svg";

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

export const propertyCardIcons: ConstImagesType = {
  bed: iconBed,
  bath: iconBath,
  car: iconCar,
};

export const feedbackButtonIcons = {
  telegram: iconTelegram,
  whatsapp: iconWhatsapp,
  viber: iconViber,
};
