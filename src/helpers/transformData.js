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

export function getValuesByKey(array, key) {
  return array
    .map((object) => (object.hasOwnProperty(key) ? object[key] : undefined))
    .filter((value) => value !== undefined);
}
