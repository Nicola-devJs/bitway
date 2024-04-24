export const transformAdaptiveSize = (size: number, viewportWidth: number = 1440): string =>
  `${Number((size / viewportWidth) * 100).toFixed(3)}vw`;

export function doSplitToArray<T>(splitCount: number, array: T[]): T[][] {
  const newArray = [];
  const rootArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if ((newArray.length % splitCount === 0 && i !== 0) || i === array.length - 1) {
      rootArray.push([...newArray]);
      newArray.length = 0;
    }
  }

  return rootArray;
}
