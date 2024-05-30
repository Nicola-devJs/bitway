export interface IPropertyParamsApartments {
  numberRooms: string;
  generalArea: string;
  livingArea: string;
  floor: string;
  floorHouse: string;
  number: string;
  typeStructure: string;
  balconies: string;
  bathroom: string;
}
export interface IPropertyParamsHouse {
  bathroom: string;
  generalArea: string;
  livingArea: string;
  numberFloor: string;
  numberRooms: string;
  typeStructure: string;
}

export interface IPropertyParamsPlot {
  generalArea: string;
}

export interface IPropertyParamsGarage {
  generalArea: string;
}

export type PropertyParamsFields = {
  [paramKey in keyof (IPropertyParamsApartments &
    IPropertyParamsHouse &
    IPropertyParamsPlot &
    IPropertyParamsGarage)]: string;
};
