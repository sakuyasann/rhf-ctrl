export const extraSystem = <T extends Record<string, any>>(others: T) => {
  const { ...rest } = others;
  return { rest: rest as unknown as T };
};
