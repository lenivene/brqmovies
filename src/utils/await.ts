export const sleep = async (time: number = 3500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
