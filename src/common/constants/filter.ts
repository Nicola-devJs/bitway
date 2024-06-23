import locationIconWhite from "@/assets/icons/filter-panel/location-w.svg";
import dollarIconWhite from "@/assets/icons/filter-panel/coin-dollar-w.svg";
import homeIconWhite from "@/assets/icons/filter-panel/home-w.svg";
import locationIconBlack from "@/assets/icons/filter-panel/location-b.svg";
import dollarIconBlack from "@/assets/icons/filter-panel/coin-dollar-b.svg";
import homeIconBlack from "@/assets/icons/filter-panel/home-b.svg";

export const optionLocation: FilterOptionType[] = [
  { label: "Тирасполь", value: "Тирасполь" },
  { label: "Бендеры", value: "Бендеры" },
  { label: "Дубоссарский р-н", value: "Дубоссарский р-н" },
  { label: "Григориопольский р-н", value: "Григориопольский р-н" },
  { label: "Слободзейский р-н", value: "Слободзейский р-н" },
  { label: "Каменский р-н", value: "Каменский р-н" },
  { label: "Рыбницкий р-н", value: "Рыбницкий р-н" },
];

export const categoryProperty: FilterOptionType[] = [
  { label: "Дом", value: "Дом" },
  { label: "Квартира", value: "Квартира" },
  { label: "Гараж", value: "Гараж" },
  { label: "Участок", value: "Участок" },
];

export const optionsRoom: FilterOptionType[] = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
];

export const optionsPropertyType: FilterOptionType[] = [
  { value: "Жилая", label: "Жилая" },
  { value: "Коммерческая", label: "Коммерческая" },
];

export const optionsTransactionType = [
  { value: "Аренда", label: "Аренда" },
  { value: "Продажа", label: "Продажа" },
];

export const optionsTypeStructure = [
  { value: "Кирпичный", label: "Кирпичный" },
  { value: "Монолитный", label: "Монолитный" },
  { value: "Панельный", label: "Панельный" },
];

type FilterOptionType = { label: string; value: string };

export interface IMainFilterParams {
  key: string;
  title: string;
  iconW: any;
  iconB: any;
  list?: FilterOptionType[];
}

const generateMainFilter = (
  params: IMainFilterParams[]
): Record<IMainFilterParams["key"], Omit<IMainFilterParams, "key">> => {
  return params.reduce((resultFilter, filterItem) => {
    const { key, ...others } = filterItem;
    return { ...resultFilter, [filterItem.key]: others };
  }, {});
};

export const mainFilter = generateMainFilter([
  {
    key: "location",
    title: "Расположение",
    iconB: locationIconBlack,
    iconW: locationIconWhite,
    list: optionLocation,
  },
  {
    key: "price",
    title: "Стоимость",
    iconB: dollarIconBlack,
    iconW: dollarIconWhite,
  },
  {
    key: "category",
    title: "Тип строения",
    iconB: homeIconBlack,
    iconW: homeIconWhite,
    list: categoryProperty,
  },
]);
