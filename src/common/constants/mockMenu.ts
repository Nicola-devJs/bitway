export const HEADER_NAVMENU = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "About", path: "/about" },
];

export const BREADCRUMBS_MENU: Record<string, string> = {
  "/": "Home",
  "/properties": "Properties",
  "/about": "About",
};

export const FOOTER_NAVMENU = [
  {
    label: "About",
    childs: [
      { label: "Home", path: "/" },
      { label: "Properties", path: "/properties" },
      { label: "About us", path: "/about" },
    ],
  },
];
