export const flattenObject = (obj, parentKey = "", separator = ".") => {
  return Object.keys(obj).reduce((acc, k) => {
    let newKey = parentKey ? `${parentKey}${separator}${k}` : k;
    if (
      typeof obj[k] === "object" &&
      !Array.isArray(obj[k]) &&
      obj[k] !== null
    ) {
      Object.assign(acc, flattenObject(obj[k], newKey, separator));
    } else {
      acc[newKey] = obj[k];
    }
    return acc;
  }, {});
};
