const getCondition = (from: string, to: string, condition: boolean) => {
  if (from === "" || to === "") {
    return true;
  }

  return condition;
};

export const lesserCondition = (from: string, to: string) => getCondition(from, to, Number(from) <= Number(to));

export const greaterCondition = (from: string, to: string) => getCondition(from, to, Number(to) >= Number(from));
