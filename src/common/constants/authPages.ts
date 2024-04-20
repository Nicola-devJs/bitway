import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import imgLogin from "@/assets/images/auth/login.jpg";
import imgCreate from "@/assets/images/auth/create.jpg";
import imgForgot from "@/assets/images/auth/forgot.jpg";
import imgOtp from "@/assets/images/auth/otp.jpg";

export const authPages: { [x: string]: StaticImageData } = {
  login: imgLogin,
  create: imgCreate,
  forgot: imgForgot,
  otp: imgOtp,
};
