// TODO ?
export const isEmptyObject = (object: object): boolean => {
  return object
    && Object.keys(object).length === 0
    && object.constructor === Object;
};
