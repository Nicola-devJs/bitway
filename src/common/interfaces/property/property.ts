import { GenericTypeFields, IFormFields } from "./fields/formFields";

export type IPropertyCard = {
  id: string;
} & IFormFields<GenericTypeFields>;

export interface IResponseProperties {
  data: IPropertyCard[];
  first: number;
  last: number;
  items: number;
  pages: number;
  next: number;
  prev: number;
}
