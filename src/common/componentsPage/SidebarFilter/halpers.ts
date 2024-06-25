export const parserRangeText = (from: string, to: string, prevText: string, postValue: string): string => {
  const fromValue = from ? `от ${from} ${postValue}` : "";
  const toValue = to ? `по ${to} ${postValue}` : "";
  const viewPriceText = `${fromValue} ${toValue}`.trim() || "неопределена";
  return `${prevText}: ${viewPriceText}`;
};
