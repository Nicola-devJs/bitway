// export const transformAdaptiveSize = (size: number, viewportWidth: number = 1440): string =>
//   `${Number((size / viewportWidth) * 100).toFixed(3)}vw`;

export const transformAdaptiveSize = (size: number, viewportWidth: number = 1440, sizeIncrease: number = 100): string =>
  `${Number((size / viewportWidth) * sizeIncrease).toFixed(3)}vw`;