import { Status } from "@/common/constants/user";
import { GenericTypeFields, IFormFields } from "./fields/formFields";
import { IUserData } from "../IAuth";

export type IPropertyCard<T extends GenericTypeFields = GenericTypeFields> = {
  _id: string;
  user: IUserData;
} & IFormFields<T>;

export interface IResponseProperties {
  objects: IPropertyCard[];
  page: number;
  amountPages: number;
  limit: number;
  status: Status;
}

export interface IResponseProperty {
  object: IPropertyCard;
  similarObjects: IPropertyCard[];
  status: Status;
}

export interface IFavoriteProperty {
  status: Status;
  message: string;
  favouriteValue: boolean;
}
