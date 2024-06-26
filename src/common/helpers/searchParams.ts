export const generateSearchParams = (filters: Record<string, any>, initialSearchParams?: string) => {
  const params = new URLSearchParams(initialSearchParams);

  clearParams(filters, params.delete.bind(params));
  addParams(filters, params.append.bind(params));

  return params.toString();
};

const clearParams = (filters: Record<string, any>, handleClear: (param: string) => void) => {
  for (const key of Object.keys(filters)) {
    if (key) {
      handleClear(key);
    }
  }
};

const addParams = (filters: Record<string, any>, handleAdd: (param: string, value: string) => void) => {
  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value) && value.length) {
      value.forEach((item) => handleAdd(key, item));
    }

    if (!Array.isArray(value) && value) {
      handleAdd(key, value);
    }
  }
};
