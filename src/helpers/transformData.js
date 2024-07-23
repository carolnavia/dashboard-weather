export function transformData(originalData) {
  const transformedData = originalData.map((item) => ({
    co: item.list[0].components.co,
    no: item.list[0].components.no,
    no2: item.list[0].components.no2,
    o3: item.list[0].components.o3,
    so2: item.list[0].components.so2,
    pm25: item.list[0].components.pm2_5,
    pm10: item.list[0].components.pm10,
    nh3: item.list[0].components.nh3,
  }));
  return transformedData;
}

export function getValuesByKey(array, key) {
  let values = array.map((objeto) =>
    objeto.hasOwnProperty(key) ? objeto[key] : undefined
  );
  values = values.filter((value) => value !== undefined);
  return values;
}
