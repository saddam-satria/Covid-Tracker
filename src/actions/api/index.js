export const getData = async (url) => {
  const rawData = await fetch(url);
  const data = {
    data: [],
    error: false,
  };
  try {
    data.data.push(await rawData.json());
  } catch (error) {
    data.error = true;
  }

  return data;
};
