import locationIconWhite from "@/assets/icons/filter-panel/location-w.svg";
import dollarIconWhite from "@/assets/icons/filter-panel/coin-dollar-w.svg";
import homeIconWhite from "@/assets/icons/filter-panel/home-w.svg";
import locationIconBlack from "@/assets/icons/filter-panel/location-b.svg";
import dollarIconBlack from "@/assets/icons/filter-panel/coin-dollar-b.svg";
import homeIconBlack from "@/assets/icons/filter-panel/home-b.svg";

const listLocation = ["Тирасполь", "Бендеры", "Дубосары", "Григориополь", "Слободзея", "Каменка"];
const listPrice = ["$100 - 1,000", "1,000 - 10,000", "10,000 - 100,000"];
const categoryProperty = ["Дом", "Апартаменты", "Вилла", "Гараж", "Пустой участок"];

export const mainFilter = {
  location: {
    title: "Расположение",
    icon_w: locationIconWhite,
    icon_b: locationIconBlack,
    value: listLocation[0],
    list: listLocation,
  },
  price: {
    title: "Стоимость",
    icon_w: dollarIconWhite,
    icon_b: dollarIconBlack,
    value: listPrice[0],
    list: listPrice,
  },
  typeProperty: {
    title: "Тип строения",
    icon_w: homeIconWhite,
    icon_b: homeIconBlack,
    value: categoryProperty[0],
    list: categoryProperty,
  },
};
