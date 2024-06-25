import locationIconWhite from "@/assets/icons/filter-panel/location-w.svg";
import dollarIconWhite from "@/assets/icons/filter-panel/coin-dollar-w.svg";
import homeIconWhite from "@/assets/icons/filter-panel/home-w.svg";
import locationIconBlack from "@/assets/icons/filter-panel/location-b.svg";
import dollarIconBlack from "@/assets/icons/filter-panel/coin-dollar-b.svg";
import homeIconBlack from "@/assets/icons/filter-panel/home-b.svg";

export const optionsLocation: FilterOptionType[] = [
  { label: "Тирасполь", value: "Тирасполь" },
  { label: "Бендеры", value: "Бендеры" },
  { label: "Дубоссарский р-н", value: "Дубоссарский р-н" },
  { label: "Григориопольский р-н", value: "Григориопольский р-н" },
  { label: "Слободзейский р-н", value: "Слободзейский р-н" },
  { label: "Каменский р-н", value: "Каменский р-н" },
  { label: "Рыбницкий р-н", value: "Рыбницкий р-н" },
];

export const optionsCategory: FilterOptionType[] = [
  { label: "Дом", value: "Дом" },
  { label: "Квартира", value: "Квартира" },
  { label: "Гараж", value: "Гараж" },
  { label: "Участок", value: "Участок" },
];

export const optionsRoom: FilterOptionType[] = [
  { label: "Однокомнатная", value: "1" },
  { label: "Двухкомнатная", value: "2" },
  { label: "Трехкомнатная", value: "3" },
  { label: "Четырехкомнатная", value: "4" },
  { label: "Пятикомнатная", value: "5" },
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
  { value: "Кательцовый", label: "Кательцовый" },
];

export const optionsFloorApartament: FilterOptionType[] = [
  { label: "Одноэтажный", value: "1" },
  { label: "Двухэтажный", value: "2" },
  { label: "Трехэтажный", value: "3" },
  { label: "Пятиэтажный", value: "5" },
  { label: "Девятиэтажный", value: "9" },
];

export const optionsFloorHouse: FilterOptionType[] = [
  { label: "Одноэтажный", value: "1" },
  { label: "Двухэтажный", value: "2" },
  { label: "Трехэтажный", value: "3" },
  { label: "Четырехэтажный", value: "4" },
  { label: "Пятиэтажный", value: "5" },
];

export const optionsParking = [
  { value: "Наземная", label: "Наземная" },
  { value: "Подземная", label: "Подземная" },
];

export const optionsRenovation = [
  { value: "Евро", label: "Евро" },
  { value: "Косметический", label: "Косметический" },
  { value: "Дизайнерский", label: "Дизайнерский" },
  { value: "Без ремонта", label: "Без ремонта" },
];

export const optionsHeating = [
  { value: "Газовое", label: "Газовое" },
  { value: "Электрическое", label: "Электрическое" },
  { value: "Нет", label: "Нет" },
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
    list: optionsLocation,
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
    list: optionsCategory,
  },
]);
