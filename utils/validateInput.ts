export const validateInput = (value: string, data: string) => {
  if (!value) return Promise.reject(`${data} is required`);
  if (value && !value.trim()) return Promise.reject(`${data} is required`);
  return Promise.resolve();
};
