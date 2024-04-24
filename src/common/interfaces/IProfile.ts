import { StaticImageData } from "next/image";

export interface IProfile {
  id: number;
  name: string;
  avatar: string | StaticImageData;
}
