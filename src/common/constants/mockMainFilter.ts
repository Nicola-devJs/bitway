import locationIconWhite from "@/assets/icons/filter-panel/location-w.svg";
import dollarIconWhite from "@/assets/icons/filter-panel/coin-dollar-w.svg";
import homeIconWhite from "@/assets/icons/filter-panel/home-w.svg";
import locationIconBlack from "@/assets/icons/filter-panel/location-b.svg";
import dollarIconBlack from "@/assets/icons/filter-panel/coin-dollar-b.svg";
import homeIconBlack from "@/assets/icons/filter-panel/home-b.svg";

const listLocation: FilterOptionType[] = [
  { label: "Тирасполь", value: "Tiraspol" },
  { label: "Бендеры", value: "Bendery" },
  { label: "Дубосары", value: "Dubosary" },
  { label: "Григориополь", value: "Grigorioply" },
  { label: "Слободзея", value: "Slobodzea" },
  { label: "Каменка", value: "Kamenka" },
];
const listPrice: FilterOptionType[] = [
  { label: "100 - 1,000", value: JSON.stringify({ from: 100, to: 1000 }) },
  { label: "1,000 - 10,000", value: JSON.stringify({ from: 1000, to: 10000 }) },
  { label: "10,000 - 100,000", value: JSON.stringify({ from: 10000, to: 100000 }) },
];
const categoryProperty: FilterOptionType[] = [
  { label: "Дом", value: "house" },
  { label: "Апартаменты", value: "apartment" },
  { label: "Гараж", value: "garage" },
  { label: "Пустой участок", value: "plot" },
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
