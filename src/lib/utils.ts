export const validateFormFields = (value: unknown): boolean => {
  if (!value || typeof value !== 'string') return false;

  return true;
};
