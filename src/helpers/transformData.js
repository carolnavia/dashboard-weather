/**
 * Transforms the given data structure by extracting specific components from the nested structure.
 * This function assumes that each item in the originalData array has a nested structure with a 'list' property,
 * which contains at least one object with a 'components' property. It then extracts various component values
 * from the first object within the 'list'.
 *
 * @param {Array} originalData - The original array of data items, expected to contain nested structures.
 * @returns {Array} An array of transformed objects, each containing the extracted component values.
 */
export function transformData(originalData) {
  return originalData.map((item) => ({
    co: item.list[0].components.co,
    no: item.list[0].components.no,
    no2: item.list[0].components.no2,
    o3: item.list[0].components.o3,
    so2: item.list[0].components.so2,
    pm25: item.list[0].components.pm2_5,
    pm10: item.list[0].components.pm10,
    nh3: item.list[0].components.nh3,
  }));
}

/**
 * This function iterates through each object in the array, checks if the object has the specified key,
 * and if so, retrieves the value associated with that key. It filters out any undefined values,
 * resulting in an array of unique values for the specified key across all objects.
 *
 * @param {Array} array - The array of objects from which to extract values.
 * @param {string} key - The key whose associated values should be extracted.
 * @returns {Array} An array of unique values associated with the specified key.
 */

export function getValuesByKey(array, key) {
  return array
    .map((object) => (object.hasOwnProperty(key) ? object[key] : undefined))
    .filter((value) => value !== undefined);
}
