import { IAddressProperty } from "./addressFields";
import {
  IPropertyParamsApartments,
  IPropertyParamsGarage,
  IPropertyParamsHouse,
  IPropertyParamsPlot,
} from "./paramsFields";
import {
  IPropertyFeaturesApartments,
  IPropertyFeaturesGarage,
  IPropertyFeaturesHouse,
  IPropertyFeaturesPlot,
} from "./featuresFields";

export interface IAnnouncementTypeFields {
  typeTransaction: string;
  typeProperty: string;
  category: CategoriesType;
}
export interface IDescriptionFields {
  heading: string;
  description: string;
  photos: string[];
  plans: string[];
}

export interface IPriceFields {
  price: string;
  phone: string;
  messengers: string[];
}

export type CategoriesType = "apartment" | "house" | "garage" | "plot";

export enum GenericTypeFields {
  Apartment = "apartment",
  House = "house",
  Garage = "garage",
  Plot = "plot",
}

type UniqueTypeFields<T> = T extends GenericTypeFields.Apartment
  ? IPropertyParamsApartments & IPropertyFeaturesApartments
  : T extends GenericTypeFields.House
  ? IPropertyParamsHouse & IPropertyFeaturesHouse
  : T extends GenericTypeFields.Garage
  ? IPropertyParamsGarage & IPropertyFeaturesGarage
  : T extends GenericTypeFields.Plot
  ? IPropertyParamsPlot & IPropertyFeaturesPlot
  : never;

export type IFormFields<T extends GenericTypeFields> = IAnnouncementTypeFields &
  IDescriptionFields &
  IAddressProperty &
  IPriceFields &
  UniqueTypeFields<T>;
