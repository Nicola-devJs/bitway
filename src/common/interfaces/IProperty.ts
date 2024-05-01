import { IProfile } from "./IProfile";

export interface IPropertyCard {
  heading: string;
  description: string;
  price: number;
  author: IProfile;
}
