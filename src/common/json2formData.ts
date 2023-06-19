export function json2formData(json: any) {
  const formData = new FormData();
  Object.entries(json).map(([key, value]: any[]) => {
    formData.append(key, value);
  });
  return formData;
}
