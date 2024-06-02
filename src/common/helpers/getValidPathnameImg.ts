export const setPathnameImage = (id: number, gallery: string[]): string =>
  `${process.env.NEXT_PUBLIC_BACKEND_API_STORAGE}${gallery[id]}`;
