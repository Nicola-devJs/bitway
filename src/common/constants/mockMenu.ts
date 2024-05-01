export const HEADER_NAVMENU = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "About", path: "/about" },
  { label: "Featured", path: "/featured" },
];

export const BREADCRUMBS_MENU: Record<string, string> = {
  "/": "Home",
  "/properties": "Properties",
  "/about": "About Us",
  "/featured": "Featured",
};

export const FOOTER_NAVMENU = [
  {
    label: "About",
    childs: [
      { label: "Home", path: "/" },
      { label: "Properties", path: "/properties" },
      { label: "About us", path: "/about" },
      { label: "Featured", path: "/featured" },
    ],
  },
];
