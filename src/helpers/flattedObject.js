/**
 * Flattens a nested JavaScript object into a single-level object.
 * @param {Object} obj - The original nested object to be flattened.
 * @param {string} [parentKey=""] - An optional parameter specifying the prefix for keys in the flattened object.
 * @param {string} [separator="."] - Specifies the character(s) used to join the parent key and child key in the flattened object.
 * @returns {Object} A flattened version of the input object, with nested properties represented as concatenated keys.
 */

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
