export const getStorageValue = <T>(key: string): T | null => {
  "use client";
  const storage = localStorage.getItem(key);
  if (!storage) {
    return null;
  }

  return JSON.parse(storage);
};
