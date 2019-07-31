export const buildActions = <T>(obj: T, prefix: string = 'RMS'): T => {
  return Object.entries(obj).reduce((acc, [key]) => {
    return { ...acc, [key]: `${prefix.toUpperCase()}/${key}` };
  }, {}) as T;
};
