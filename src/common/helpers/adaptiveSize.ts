export const transformAdaptiveSize = (size: number, viewportWidth: number = 1440): string =>
  `${Number((size / viewportWidth) * 100).toFixed(3)}vw`;
