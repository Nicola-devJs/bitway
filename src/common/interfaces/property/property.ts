import { GenericTypeFields, IFormFields } from "./fields/formFields";

export type IPropertyCard = {
  _id: string;
  favourite: boolean;
} & IFormFields<GenericTypeFields>;

export interface IResponseProperties {
  objects: IPropertyCard[];
  page: number;
  amountPages: number;
  limit: number;
}
