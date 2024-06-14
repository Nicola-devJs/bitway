export const HEADER_NAVMENU = [
  { label: "Главная", path: "/" },
  { label: "Недвижимость", path: "/properties" },
  { label: "О нас", path: "/about" },
  { label: "Избранное", path: "/featured" },
];

export const BREADCRUMBS_MENU: Record<string, string> = {
  "/": "Главная",
  "/properties": "Недвижимость",
  "/about": "О нас",
  "/featured": "Избранное",
};

export const FOOTER_NAVMENU = [
  {
    label: "О нас",
    childs: [
      { label: "Главная", path: "/" },
      { label: "Недвижимость", path: "/properties" },
      { label: "О нас", path: "/about" },
      { label: "Избранное", path: "/featured" },
    ],
  },
];
