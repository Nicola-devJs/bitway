import { IPropertyCard } from "@/common/interfaces/property/property";

export const getValueProperty = (key: string, property: IPropertyCard) => {
  const valueIsString = property[key as keyof IPropertyCard];
  if (typeof valueIsString === "string") {
    return valueIsString;
  }
  return null;
};
