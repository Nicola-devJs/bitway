import locationIconWhite from "@/assets/icons/filter-panel/location-w.svg";
import dollarIconWhite from "@/assets/icons/filter-panel/coin-dollar-w.svg";
import homeIconWhite from "@/assets/icons/filter-panel/home-w.svg";
import locationIconBlack from "@/assets/icons/filter-panel/location-b.svg";
import dollarIconBlack from "@/assets/icons/filter-panel/coin-dollar-b.svg";
import homeIconBlack from "@/assets/icons/filter-panel/home-b.svg";

export const listLocation: FilterOptionType[] = [
  { label: "Тирасполь", value: "Тирасполь" },
  { label: "Бендеры", value: "Бендеры" },
  { label: "Дубосары", value: "Дубосары" },
  { label: "Григориополь", value: "Григориополь" },
  { label: "Слободзея", value: "Слободзея" },
  { label: "Каменка", value: "Каменка" },
];
export const listPrice: FilterOptionType[] = [
  { label: "100 - 1,000", value: JSON.stringify({ from: 100, to: 1000 }) },
  { label: "1,000 - 10,000", value: JSON.stringify({ from: 1000, to: 10000 }) },
  { label: "10,000 - 100,000", value: JSON.stringify({ from: 10000, to: 100000 }) },
];
export const categoryProperty: FilterOptionType[] = [
  { label: "Дом", value: "Дом" },
  { label: "Апартаменты", value: "Апартаменты" },
  { label: "Гараж", value: "Гараж" },
  { label: "Пустой участок", value: "Пустой участок" },
];

export const listFloor: FilterOptionType[] = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
];

type FilterOptionType = { label: string; value: string };

export type generateMainFilterParams = {
  key: string;
  title: string;
  iconW: any;
  iconB: any;
  defaultValue: FilterOptionType;
  list: FilterOptionType[];
};

const generateMainFilter = (
  params: generateMainFilterParams[]
): Record<generateMainFilterParams["key"], Exclude<generateMainFilterParams, "key">> => {
  return params.reduce((resultFilter, filterItem) => {
    const { key, ...others } = filterItem;
    return { ...resultFilter, [filterItem.key]: others };
  }, {});
};

export const mainFilter = generateMainFilter([
  {
    key: "location",
    defaultValue: listLocation[0],
    title: "Расположение",
    iconB: locationIconBlack,
    iconW: locationIconWhite,
    list: listLocation,
  },
  {
    key: "price",
    defaultValue: listPrice[0],
    title: "Стоимость",
    iconB: dollarIconBlack,
    iconW: dollarIconWhite,
    list: listPrice,
  },
  {
    key: "typeProperty",
    defaultValue: categoryProperty[0],
    title: "Тип строения",
    iconB: homeIconBlack,
    iconW: homeIconWhite,
    list: categoryProperty,
  },
]);
